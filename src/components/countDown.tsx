import type { TestStatus } from "@/assets/types";
import { useEffect, useState } from "react";

type CountDownProps = {
  testStatus: TestStatus;
  setTestStatus: (v: TestStatus) => void;
  setElapsedTime: (v: number) => void;
};

const initialTime = 60;

export const CountDown = ({
  testStatus,
  setTestStatus,
  setElapsedTime,
}: CountDownProps) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (testStatus !== "running") {
      setTimer(initialTime);
      return;
    }

    if (timer === 0) {
      setTestStatus("finished");
      setTimer(initialTime);
      return;
    }

    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
      setElapsedTime(initialTime - timer);
    }, 1000);

    return () => clearInterval(interval);
  }, [testStatus, setTestStatus, timer]);

  return `0:${timer < 10 ? `0${timer}` : timer}`;
};
