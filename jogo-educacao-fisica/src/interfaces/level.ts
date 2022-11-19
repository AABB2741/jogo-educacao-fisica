import { ImageSourcePropType } from "react-native";

export interface WordProps {
    word: string;
    index: number;
    unlock?: number;
    hidden?: boolean;
    tries: string[];
    get percent(): number;
    found(list: number[]): boolean;
}

export interface LevelProp {
    id: number;
    seasonId: seasons;
    question?: string;
    image?: ImageSourcePropType;
    reward?: number;
    words: WordProps[];
    get size(): number;
}
