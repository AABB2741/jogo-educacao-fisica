import { createContext, useContext, useEffect, useState } from "react";
// import Storage from "@react-native-async-storage/async-storage";
import * as Storage from "../utils/storage";

import { LevelProgress, Progress } from "../@types/progress";

interface Props {
    children: React.ReactNode;
}

interface StorageData {
    storage: Progress;
    setStorage: any;
    save: ({}: SaveProps) => void;
}

interface SaveProps {
    levelID: number;
    data: LevelProgress
}

const StorageContext = createContext<StorageData>({} as StorageData);

export default ({ children }: Props) => {
    const [storage, setStorage] = useState<Progress>({});

    async function save({ levelID, data }: SaveProps) {
        let newData = { ...storage };
        if (!newData.levels || newData.levels.length == 0)
            newData.levels = [data];

        let index = newData.levels.findIndex(level => level.id == levelID);
        if (index < 0) {
            newData.levels.push(data);
        } else {
            newData.levels[index] = { ...data };
        }
        await Storage.setItem("progress", newData);
        setStorage(newData);
    }

    useEffect(() => {
        Storage.getItem("progress").then(progress => setStorage(progress));
    }, []);

    return (
        <StorageContext.Provider value={{ storage, setStorage, save }}>
            {children}
        </StorageContext.Provider>
    );
}

export const useStorage = () => useContext(StorageContext);
