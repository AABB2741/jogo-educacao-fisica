export interface Termo {
    word: string;
    index?: number;
}

export interface LevelProgress {
    id?: number;
    found?: number[];
    guesses?: string[];
    termoGuesses?: Termo[];
}

declare type Progress = {
    coins?: number;
    suns?: number;
    leaves?: number;
    snowflakes?: number;
    flowers?: number;
    levels?: LevelProgress[]
}
