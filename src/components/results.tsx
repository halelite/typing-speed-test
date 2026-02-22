import { Button } from "./ui/button";

const Results = () => {
	return (
		<div className="flex flex-col items-center h-full relative">
			<img
				src="/assets/images/pattern-star-1.svg"
				alt="start icon"
				className="absolute top-1/2 right-4 md:right-8 lg:right-28"
			/>

			<img
				src="/assets/images/pattern-star-2.svg"
				alt="start icon"
				className="absolute top-1/6 left-4 md:left-8 lg:left-28"
			/>

			<img
				src="/assets/images/icon-completed.svg"
				alt="check icon"
				className="mb-5"
			/>

			<div>Test Complete!</div>
			<div>Solid run. Keep pushing to beat yout high score.</div>

			<div className="flex items-center gap-3 my-5">
				<div className="flex-1 border rounded-10 p-3">
					<div>WPM:</div>
					<div>85</div>
				</div>

				<div className="flex-1 border rounded-10 p-3">
					<div>Accuracy:</div>
					<div>100%</div>
				</div>

				<div className="flex-1 border rounded-10 p-3">
					<div>Characters:</div>
					<div>120/5</div>
				</div>
			</div>

			<Button>
				go Again
				<img src="/assets/images/Undo-Icon.svg" />
			</Button>
		</div>
	);
};

export default Results;
