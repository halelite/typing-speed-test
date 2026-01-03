import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { useState } from "react";
import clsx from "clsx";

export function SettingContainer() {
	const [difficulty, setDifficylty] = useState("easy");
	const [mode, setMode] = useState("timed");

	const difficultyItems = [
		{
			value: "easy",
			label: "Easy",
		},

		{
			value: "medium",
			label: "Medium",
		},
		{
			value: "hard",
			label: "Hard",
		},
	];

	const modeItems = [
		{
			value: "timed",
			label: "Timed (60s)",
		},
		{
			value: "passage",
			label: "Passage",
		},
	];

	return (
		<>
			{/* tablet & desktop */}
			<div className="hidden md:flex items-center">
				<div className="flex items-center gap-2.5 border-e border-e-neutral-700 pe-4">
					<div className="text-16 leading-120 text-neutral-400">
						Difficulty:
					</div>
					<div className="flex items-center gap-1.5">
						{difficultyItems.map((item) => (
							<Button
								key={item.value}
								variant="outline"
								className={clsx(
									"py-1.5! px-2.5! text-16! leading-120! rounded-8 focus:border-white focus:text-white",
									{
										"border-blue-light text-blue-light":
											item.value === difficulty,
									}
								)}
								onClick={() => setDifficylty(item.value)}
							>
								{item.label}
							</Button>
						))}
					</div>
				</div>

				<div className="flex items-center gap-2.5 ps-4">
					<div className="text-16 leading-120 text-neutral-400">Mode:</div>
					<div className="flex items-center gap-1.5">
						{modeItems.map((item) => (
							<Button
								key={item.value}
								variant="outline"
								className={clsx(
									"py-1.5! px-2.5! text-16! leading-120! rounded-8",
									{
										"border-blue-light text-blue-light": item.value === mode,
									}
								)}
								onClick={() => setMode(item.value)}
							>
								{item.label}
							</Button>
						))}
					</div>
				</div>
			</div>

			{/* mobile */}
			<div className="md:hidden flex items-center gap-2.5">
				<Select defaultValue="easy">
					<SelectTrigger className="flex-1 cursor-pointer">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="easy">Easy</SelectItem>
							<SelectItem value="medium">Medium</SelectItem>
							<SelectItem value="hard">Hard</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select defaultValue="timed">
					<SelectTrigger className="flex-1 cursor-pointer">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="timed">Timed (60s)</SelectItem>
							<SelectItem value="passage">Passage</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</>
	);
}
