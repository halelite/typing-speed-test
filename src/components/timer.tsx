import type { TestStatus } from "@/assets/types";
import { useEffect, useState } from "react";

type TimerProps = {
  testStatus: TestStatus;
  setTotalElapsedTime: (v: number) => void;
};

export const Timer = ({ testStatus, setTotalElapsedTime }: TimerProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (testStatus !== "running") {
      setElapsedTime(0);
      return;
    }

    const start = Date.now();

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - start) / 1000));
      setTotalElapsedTime(Math.floor((Date.now() - start) / 1000));
    }, 100);

    return () => clearInterval(interval);
  }, [testStatus]);

  return `0:${elapsedTime < 10 ? `0${elapsedTime}` : elapsedTime}`;
};
