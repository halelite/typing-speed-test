import type { Difficulty, Mode, TestStatus } from "@/assets/types";
import { CountDown } from "./countDown";
import { SettingContainer } from "./settingContainer";
import { Timer } from "./timer";

type StatsProps = {
  wpm: number;
  accuracy: number;
  testStatus: TestStatus;
  mode: Mode;
  difficulty: Difficulty;
  setMode: (v: Mode) => void;
  setDifficulty: (v: Difficulty) => void;
  setTestStatus: (v: TestStatus) => void;
  setTotalElapsedTime: (v: number) => void;
};

const StatsController = ({
  testStatus,
  setTestStatus,
  setTotalElapsedTime,
  setDifficulty,
  setMode,
  wpm,
  accuracy,
  mode,
  difficulty,
}: StatsProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-5 justify-between xl:flex-row pb-4 px-4 md:px-8 lg:px-28 border-b border-b-neutral-700">
      <div className="flex items-center justify-between md:justify-start">
        <div className="flex flex-col items-center justify-center flex-1 md:flex-none md:flex-row md:gap-3 md:pe-4">
          <span className="text-neutral-400 text-16 leading-120 md:text-20">
            WPM:
          </span>
          <span className="text-24 font-bold leading-100">{wpm}</span>
        </div>

        <div className="flex flex-col md:flex-row items-center flex-1 md:flex-none border-x border-x-neutral-700 md:gap-3 md:px-4">
          <span className="text-neutral-400 text-16 leading-120 md:text-20">
            Accuracy:
          </span>
          <span className="text-24 font-bold leading-100">{accuracy}%</span>
        </div>

        <div className="flex flex-col md:flex-row items-center flex-1 md:flex-none md:gap-3 md:ps-4">
          <span className="text-neutral-400 text-16 leading-120 md:text-20">
            Time:
          </span>
          <span className="text-24 font-bold leading-100">
            {mode === "timed" ? (
              <CountDown
                testStatus={testStatus}
                setTestStatus={setTestStatus}
                setElapsedTime={setTotalElapsedTime}
              />
            ) : (
              <Timer
                testStatus={testStatus}
                setTotalElapsedTime={setTotalElapsedTime}
              />
            )}
          </span>
        </div>
      </div>

      <SettingContainer
        difficulty={difficulty}
        mode={mode}
        setMode={setMode}
        setDifficylty={setDifficulty}
      />
    </div>
  );
};

export default StatsController;
