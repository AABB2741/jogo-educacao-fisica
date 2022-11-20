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
        word: "Demais",
        unlock: 3
    }]
}, {
    seasonId: "summer",
    question: "O que podemos aproveitar no verão?",
    words: [{
        word: "Férias"
    }, {
        word: "Descanso"
    }]
}, {
    seasonId: "summer",
    question: "",
    image: require("../../assets/imgs/levels/3.jpg"),
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
    seasonId: "winter",
    question: "O que usar no inverno?",
    words: [{
        word: "Blusa"
    }, {
        word: "Luvas"
    }, {
        word: "Touca"
    }]
}].map((level, id) => {
    return {
        ...level,
        id,
        get size() {
            // @ts-ignore
            return level.words.reduce((ac, v) => ac + v.word.length, 0);
        },
    };
}).map(level => {
    level.words = level.words.map((word, index) => ({
        ...word,
        index: index + 1,
        get percent() {
            return word.word.length / level.size * 100;
        },
        found(list: number[]) {
            return list.includes(this.index);
        }
    }));
    return level;
}) as LevelProp[];

export default levels;
