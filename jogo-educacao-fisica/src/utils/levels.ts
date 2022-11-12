import { LevelProp } from "../interfaces/level";

const levels = [{
    seasonId: "summer",
    question: "O verão é...",
    words: [{
        word: "Legal"
    }, {
        word: "Quente"
    }, {
        word: "Estação"
    }, {
        word: "Bom"
    }, {
        word: "Divertido",
        unlock: 3
    }]
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}].map((level, id) => {
    return {
        ...level,
        id,
        get size() {
            return level.words.reduce((ac, v) => ac + v.word.length, 0);
        },
    };
}).map(level => {
    level.words = level.words.map((word, index) => ({
        ...word,
        index: index + 1,
        get percent() {
            return word.word.length / level.size * 100;
        }
    }));
    return level;
}) as LevelProp[];

export default levels;
