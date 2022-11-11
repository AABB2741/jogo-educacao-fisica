export interface LevelProgress {
    id?: number;
    found?: string[];
    guesses?: string[];
}

declare type Progress = {
    coins?: number;
    suns?: number;
    leaves?: number;
    snowflakes?: number;
    flowers?: number;
    levels?: LevelProgress[]
}
