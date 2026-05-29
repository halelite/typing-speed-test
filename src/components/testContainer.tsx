import { useEffect, useState } from "react";
import NotStarted from "./notStarted";
import StatsController from "./statsController";
import TextSection from "./textSection";
import Results from "./results";
import type { Difficulty, Mode, TestStatus } from "@/assets/types";
import { getPersonalBest, getRandomText } from "@/assets/helpers";

const TestContainer = () => {
  const [testStatus, setTestStatus] = useState<TestStatus>("idle");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [mode, setMode] = useState<Mode>("timed");
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [words, setWords] = useState(getRandomText(difficulty));
  const [personalBest, setPersonalBest] = useState(getPersonalBest());

  console.log("personal best", personalBest);
  console.log("getPersonalBest()", getPersonalBest());
  console.log("localStorage", localStorage.getItem("wpm-history"));

  useEffect(() => {
    setWords(getRandomText(difficulty));
  }, [difficulty]);

  useEffect(() => {
    if (testStatus === "idle") {
      setAccuracy(100);
      setWpm(0);
      return;
    }

    if (testStatus === "finished") {
      const storedHistory = localStorage.getItem("wpm-history");

      const wpmHistory = storedHistory ? JSON.parse(storedHistory) : [];
      localStorage.setItem("wpm-history", JSON.stringify([...wpmHistory, wpm]));
      setPersonalBest(getPersonalBest());
    }
  }, [testStatus]);

  return (
    <div className="h-full flex flex-col">
      {testStatus !== "finished" && (
        <StatsController
          testStatus={testStatus}
          setTestStatus={setTestStatus}
          setTotalElapsedTime={setTotalElapsedTime}
          setDifficulty={setDifficulty}
          setMode={setMode}
          wpm={wpm}
          accuracy={accuracy}
          difficulty={difficulty}
          mode={mode}
        />
      )}

      {testStatus === "running" ? (
        <TextSection
          setWpm={setWpm}
          setAccuracy={setAccuracy}
          testStatus={testStatus}
          words={words}
          setTestStatus={setTestStatus}
          totalElapsedTime={totalElapsedTime}
        />
      ) : testStatus === "finished" ? (
        <Results setTestStatus={setTestStatus} />
      ) : (
        <NotStarted setTestStatus={setTestStatus} text={words} />
      )}
    </div>
  );
};

export default TestContainer;
