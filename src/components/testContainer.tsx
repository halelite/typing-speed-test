import { useState } from "react";
import NotStarted from "./notStarted";
import StatsController from "./statsController";
import TextSection from "./textSection";

const TestContainer = () => {
	const [startTest, setStartTest] = useState(false);
	const [words, setWords] = useState([
		"The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian fromAnatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.",
	]);

	return (
		<div className="h-full flex flex-col">
			<StatsController />

			{startTest ? (
				<TextSection words={words} />
			) : (
				<NotStarted setStartTest={setStartTest} />
			)}
		</div>
	);
};

export default TestContainer;
