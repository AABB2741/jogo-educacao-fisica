import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
        console.log("Salvando:");
        console.log(data);
    }

    useEffect(() => {
        AsyncStorage.getItem("progress").then(progress => setStorage(JSON.parse(progress ?? "{}")));
    }, []);

    return (
        <StorageContext.Provider value={{ storage, setStorage, save }}>
            {children}
        </StorageContext.Provider>
    );
}

export const useStorage = () => useContext(StorageContext);
