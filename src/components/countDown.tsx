import { useEffect, useState } from "react";

type CountDownProps = {
	testStarted: boolean;
	setStartTest: (v: boolean) => void;
};

const initialTime = 60;

export const CountDown = ({ testStarted, setStartTest }: CountDownProps) => {
	const [timer, setTimer] = useState(initialTime);

	useEffect(() => {
		if (!testStarted) return;

		if (timer === 0) {
			setStartTest(false);
			setTimer(initialTime);
			return;
		}

		const interval = setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [testStarted, setStartTest, timer]);

	return `0:${timer < 10 ? `0${timer}` : timer}`;
};
