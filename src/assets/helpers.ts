export function calculateWpm(letters: number, time: number = 60) {
	const words = letters / 5;
	const minuts = time / 60;

	const wpm = words / minuts;
	return wpm;
}
