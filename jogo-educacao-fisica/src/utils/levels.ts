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
    level.words = level.words.map((word, index) => ({
        ...word,
        index: index + 1
    }));
    return {
        ...level,
        id,
        get percent() {
            return 0;
        },
    };
}) as LevelProp[];

export default levels;
