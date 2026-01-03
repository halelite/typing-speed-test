import { useEffect } from "react";
import { Button } from "./ui/button";

type NotStartedProps = {
	setStartTest: (v: boolean) => void;
};

const NotStarted = ({ setStartTest }: NotStartedProps) => {
	const handleOnKeyDown = (e: KeyboardEvent) => {
		console.log("key", e.key);
		setStartTest(true);
	};

	useEffect(() => {
		window.addEventListener("keydown", handleOnKeyDown);

		return () => {
			window.removeEventListener("keydown", handleOnKeyDown);
		};
	}, [handleOnKeyDown]);

	return (
		<>
			<div className="pt-8 flex flex-col min-h-0 relative">
				<div className="flex flex-col -min-h-0 blur-[6px] px-4 md:px-8 lg:px-28">
					<div className="text-32 md:text-40 text-neutral-400 leading-136 tracking-80 shadow-lg">
						The archaeological expedition unearthed artifacts that complicated
						prevailing theories about Bronze Age trade networks. Obsidian from
						Anatolia, lapis lazuli from Afghanistan, and amber from the
						Baltic—all discovered in a single Mycenaean tomb—suggested
						commercial connections far more extensive than previously
						hypothesized. "We've underestimated ancient peoples' navigational
						capabilities and their appetite for luxury goods," the lead
						researcher observed. "Globalization isn't as modern as we assume.
					</div>
				</div>

				<div className="absolute top-[50%] left-[50%] translate-[-50%] w-full flex flex-col gap-5 items-center">
					<Button
						className="bg-blue px-4 py-6 rounded-12 text-20 leading-120 tracking-[-0.3px] font-semibold hover:bg-blue-light focus:outline-blue focus:outline-2 focus:outline-offset-2"
						onClick={() => setStartTest(true)}
					>
						Start Typing Test
					</Button>
					<div className="text-20 leading-120 tracking-[-0.3px] font-semibold">
						Or click the text and start typing
					</div>
				</div>
			</div>
		</>
	);
};

export default NotStarted;
