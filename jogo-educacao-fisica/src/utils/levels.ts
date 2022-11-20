import { LevelProp } from "../interfaces/level";
import normalize from "./normalize";

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
    }, {
        word: "Praia"
    }, {
        word: "Piscina",
        alias: [
            "Nadar",
            "Natação"
        ]
    }, {
        word: "Sol"
    }]
}, {
    seasonId: "summer",
    image: require("../../assets/imgs/levels/3.jpg"),
    words: [{
        word: "Praia"
    }, {
        word: "Mar",
        alias: [
            "Oceano",
            "Maré",
            "Água",
            "Nadar"
        ]
    }, {
        word: "Banhista",
        alias: [
            "Nadador",
            "Pessoa",
            "Pessoas"
        ]
    }, {
        word: "Nuvem",
        alias: [
            "Céu",
            "Nuvens"
        ]
    }, {
        word: "Areia",
        alias: [
            "Chão",
            "Terra"
        ]
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
        // @ts-ignore
        alias: (word?.alias ?? []).map(a => normalize(a).toLowerCase()),
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
