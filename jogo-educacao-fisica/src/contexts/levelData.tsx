import { createContext, useContext } from "react";

interface LevelDataProps {
    children: React.ReactNode;
}

const LevelDataContext = createContext({});

export default ({children}: LevelDataProps) => {
    return (
        <LevelDataContext.Provider value={{}}>
            {children}
        </LevelDataContext.Provider>
    );
}

export const useLevelData = () => useContext(LevelDataContext);
