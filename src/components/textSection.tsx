import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { calculateWpm } from "@/assets/helpers";

type TextProps = {
	words: any;
	setWpm: (v: number) => void;
	testStarted: boolean;
	setStartTest: (v: boolean) => void;
};

const TextSection = ({
	words,
	setWpm,
	testStarted,
	setStartTest,
}: TextProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const currentIndexRef = useRef<HTMLSpanElement | null>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const [typedText, setTypedText] = useState("");
	const [totalLetters, setTotalLetters] = useState(0);
	// const [testCompleted, setTestCompleted] = useState(false);
	const [currentPosition, setCurrentPosition] = useState(0);

	useEffect(() => {
		const container = textRef.current;
		if (!container) return;

		const preventScroll = (e: WheelEvent) => {
			e.preventDefault();
			e.stopPropagation();
			return false;
		};

		const preventTouch = (e: TouchEvent) => {
			// Only prevent vertical scroll
			if (e.touches.length === 1) {
				e.preventDefault();
			}
		};

		// Prevent wheel/touchpad scrolling
		container.addEventListener("wheel", preventScroll, { passive: false });

		// Prevent touch scrolling on mobile
		container.addEventListener("touchmove", preventTouch, { passive: false });

		return () => {
			container.removeEventListener("wheel", preventScroll);
			container.removeEventListener("touchmove", preventTouch);
		};
	}, []);

	useEffect(() => {
		const container = textRef.current;
		const activeChar = currentIndexRef.current;

		if (!container || !activeChar) return;

		// how far is this active character from the top of the entire content (not the visible area)
		const charTop = activeChar.offsetTop;
		const scrollTop = container.scrollTop;
		const containerHeight = container.clientHeight;

		// how far is the active character from the top of the visible window
		const visibleCharTop = charTop - scrollTop;

		// if the cursor goes past 60% of the visible area, scroll down
		if (visibleCharTop > containerHeight * 0.6) {
			container.scrollTop += activeChar.offsetHeight;
		}
	}, [typedText]);

	useEffect(() => {
		if (!testStarted) return;

		setWpm(calculateWpm(totalLetters));
		console.log("total letters", totalLetters);
	}, [typedText, totalLetters]);

	const handleRestartTest = () => {
		setTypedText("");
		setCurrentPosition(0);
		// setTestCompleted(false);
		setStartTest(true);

		if (textRef.current) {
			textRef.current.scrollTop = 0;
		}
	};

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			const scrollKeys = [
				"ArrowUp",
				"ArrowDown",
				"PageUp",
				"PageDown",
				"Home",
				"End",
				"ArrowLeft",
				"ArrowRight",
			];

			// prevent keyboard scrolling (space, arrows, page up/down)
			if (scrollKeys.includes(e.key)) {
				e.preventDefault();
				return;
			}

			if (e.key === "Backspace") {
				if (currentPosition > 0) {
					setCurrentPosition((prev) => prev - 1);
					setTotalLetters((prev) => prev + 1);
				}
				return;
			}

			if (e.key.length !== 1 || e.ctrlKey || e.metaKey) {
				return;
			}

			if (currentPosition >= words[0].length) {
				// setTestCompleted(true);
				setStartTest(false);
				return;
			}

			setCurrentPosition((prev) => prev + 1);
			setTotalLetters((prev) => prev + 1);
		},
		[currentPosition]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	const handleContainerClick = () => {
		inputRef.current?.focus();
	};

	return (
		<div
			className="pt-8 px-4 md:px-8 lg:px-28 pb-8 md:pb-16 lg:py-8 flex flex-col p-8 min-h-0"
			onClick={handleContainerClick}
		>
			<input
				ref={inputRef}
				autoFocus
				value={typedText}
				onChange={(e) => {
					console.log("typed text", typedText);
					setTypedText(e.target.value);
				}}
				onBlur={() => inputRef.current?.focus()}
				className="absolute opacity-0 h-0 w-0"
				aria-hidden="true"
			/>

			<div
				className="flex flex-col mb-8 md:mb-10 lg:mb-16 -min-h-0 overflow-auto scrollbar-hidden relative"
				ref={textRef}
			>
				<div className="text-40 text-neutral-400 leading-136 tracking-40 select-none">
					{words[0].split("").map((char: string, index: number) => {
						const typedChar = typedText[index];

						let className = "";

						if (currentPosition === index) className = "bg-white/20 rounded-4";

						if (typedChar !== undefined) {
							className =
								typedChar === char
									? "text-green"
									: "text-red underline underline-offset-8!";
						}

						return (
							<span
								key={index}
								className={className}
								ref={index === currentPosition ? currentIndexRef : null}
							>
								{char}
							</span>
						);
					})}
				</div>
			</div>

			<div className="flex items-center justify-center pt-6 lg:pt-8 border-t border-t-neutral-700">
				<Button
					className="bg-neutral-800! text-20 font-semibold leading-120 tracking-[-0.3px] px-4! py-5!"
					onClick={handleRestartTest}
				>
					Restart Test
					<img src="/assets/images/Undo-Icon.svg" />
				</Button>
			</div>
		</div>
	);
};

export default TextSection;
