import { createContext, useContext } from "react";

interface Props {
    children: React.ReactNode;
}

interface saveData {

}

const SaveContext = createContext<saveData>({});

export default ({ children }: Props) => {
    return (
        <SaveContext.Provider value={{}}>
            {children}
        </SaveContext.Provider>
    );
}
