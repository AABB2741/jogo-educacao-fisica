import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Progress } from "../@types/progress";

interface Props {
    children: React.ReactNode;
}

interface StorageData {
    storage: Progress;
    setStorage: any;
}

const StorageContext = createContext<StorageData>({} as StorageData);

export default ({ children }: Props) => {
    const [storage, setStorage] = useState<Progress>({});

    useEffect(() => {
        AsyncStorage.getItem("progress").then(progress => setStorage(JSON.parse(progress ?? "{}")));
    }, []);

    return (
        <StorageContext.Provider value={{ storage, setStorage }}>
            {children}
        </StorageContext.Provider>
    );
}

export const useStorage = () => useContext(StorageContext);
