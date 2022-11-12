export interface WordProps {
    word: string;
    index: number;
    unlock?: number;
}

export interface LevelProp {
    id: number;
    seasonId: seasons;
    question: string;
    reward?: number;
    words: WordProps[];
    get percent(): number;
}
