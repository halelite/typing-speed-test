import { useEffect, useState } from "react";

type CountDownProps = {
	testStarted: boolean;
	setStartTest: (v: boolean) => void;
};

export const CountDown = ({ testStarted, setStartTest }: CountDownProps) => {
	const [timer, setTimer] = useState(60);

	useEffect(() => {
		if (!testStarted) return;

		if (timer === 0) {
			setStartTest(false);
			return;
		}

		const interval = setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [testStarted, setStartTest]);

	return `0:${timer < 10 ? `0${timer}` : timer}`;
};
