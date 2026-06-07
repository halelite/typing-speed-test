import { getPersonalBest } from "@/assets/helpers";
import { createContext, useContext, useState } from "react";

type PersonalBestContextType = {
  personalBest: number;
  // setPersonalBest: React.Dispatch<React.SetStateAction<number>>;
  updatePersonalBest: (v: number) => void;
};

const PersonalBestContext = createContext<PersonalBestContextType | null>(null);

export const PersonalBestProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [personalBest, setPersonalBest] = useState(getPersonalBest());

  const updatePersonalBest = (wpm: number) => {
    const storedHistory = localStorage.getItem("wpm-history");

    const wpmHistory = storedHistory ? JSON.parse(storedHistory) : [];
    localStorage.setItem("wpm-history", JSON.stringify([...wpmHistory, wpm]));
    setPersonalBest(getPersonalBest());
  };

  return (
    <PersonalBestContext value={{ personalBest, updatePersonalBest }}>
      {children}
    </PersonalBestContext>
  );
};

export const usePersonalBest = () => {
  const context = useContext(PersonalBestContext);

  if (!context) {
    throw new Error(
      "usePersonalBest must be used within a PersonalBestProvider",
    );
  }

  return context;
};
