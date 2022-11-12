import LevelProp from "../interfaces/level";

const levels: LevelProp[] = [{
    id: 0,
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
    id: 1,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 2,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 3,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 4,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 5,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 6,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 7,
    seasonId: "summer",
    question: "",
    words: []
}, {
    id: 8,
    seasonId: "summer",
    question: "",
    words: []
}].map(level => {
    level.words = level.words.map((word, index) => ({
        ...word,
        index: index + 1
    }));
    console.log(level);
    return level;
}) as LevelProp[];

export default levels;
