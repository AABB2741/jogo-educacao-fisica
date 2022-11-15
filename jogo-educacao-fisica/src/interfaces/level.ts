export interface WordProps {
    word: string;
    index: number;
    unlock?: number;
    tries: string[];
    get percent(): number;
    found(list: number[]): boolean;
}

export interface LevelProp {
    id: number;
    seasonId: seasons;
    question: string;
    reward?: number;
    words: WordProps[];
    get size(): number;
}
