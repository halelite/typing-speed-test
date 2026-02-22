import { useState } from "react";
import NotStarted from "./notStarted";
import StatsController from "./statsController";
import TextSection from "./textSection";

const TestContainer = () => {
	const [startTest, setStartTest] = useState(false);
	const [wpm, setWpm] = useState(0);
	const [accuracy, setAccuracy] = useState(100);
	const [words, setWords] = useState([
		"The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian fromAnatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.",
	]);

	return (
		<div className="h-full flex flex-col">
			<StatsController
				testStarted={startTest}
				setStartTest={setStartTest}
				wpm={wpm}
				accuracy={accuracy}
			/>

			{startTest ? (
				<TextSection
					setWpm={setWpm}
					testStarted={startTest}
					words={words}
					setStartTest={setStartTest}
				/>
			) : (
				<NotStarted setStartTest={setStartTest} />
			)}
		</div>
	);
};

export default TestContainer;
