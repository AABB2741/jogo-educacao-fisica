import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageContext = createContext<Progress>({});

interface Props {
    children: React.ReactNode;
}

export default ({ children }: Props) => {
    const [progress, setProgress] = useState<Progress>({});

    useEffect(() => {
        AsyncStorage.getItem("progress").then(progress => setProgress(JSON.parse(progress ?? "{}")));
    }, []);

    return (
        <StorageContext.Provider value={progress}>
            {children}
        </StorageContext.Provider>
    );
}

export const useStorage = () => useContext(StorageContext);
