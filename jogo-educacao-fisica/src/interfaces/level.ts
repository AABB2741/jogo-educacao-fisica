export interface WordProps {
    word: string;
    index: number;
    unlock?: number;
}

export default interface LevelProp {
    id: number;
    seasonId: "summer" | "falls" | "winter" | "spring";
    question: string;
    reward?: number;
    words: WordProps[];
}
