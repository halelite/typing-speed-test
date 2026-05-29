import type { Difficulty } from "./types";
import data from "../../public/data.json";

export function calculateWpm(letters: number, time: number) {
  if (time <= 0) return 0;

  const words = letters / 5;
  const minuts = time / 60;

  const wpm = Math.round(words / minuts);
  return wpm;
}

export function calculateAccuracy(correct: number, total: number) {
  return total === 0 ? 100 : Math.round((correct / total) * 100);
}

export const getRandomText = (difficulty: Difficulty) => {
  // a random number between 0 and 9 (both included)
  const randomIndex = Math.floor(Math.random() * 10);

  return data[difficulty][randomIndex].text;
};

export const getPersonalBest = () => {
  const wpmHistory = JSON.parse(localStorage.getItem("wpm-history") ?? "[]");

  return wpmHistory.length === 0 ? 0 : Math.max(...wpmHistory);
};
