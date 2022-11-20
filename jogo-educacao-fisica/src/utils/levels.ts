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
        word: "Demais"
    }]
}, {
    seasonId: "summer",
    question: "O que podemos aproveitar do verão?",
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
    question: "O verão é bom para...",
    words: [{
        word: "Exercitar"
    }, {
        word: "Caminhar",
        alias: [
            "Caminhar",
            "Passear"
        ]
    }, {
        word: "Cinema",
        alias: [
            "Assistir"
        ]
    }, {
        word: "Refrescar",
        alias: [
            "Beber"
        ]
    }, {
        word: "Churrasco",
        alias: [
            "Comer",
            "Festa"
        ]
    }]
}, {
    seasonId: "summer",
    image: require("../../assets/imgs/levels/4.jpg"),
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
    image: require("../../assets/imgs/levels/5.jpg"),
    words: []
}, {
    seasonId: "summer",
    question: "",
    words: []
}, {
    seasonId: "summer",
    question: "É uma ótima maneira de se refrescar no verão",
    words: [{
        word: "Banho"
    }, {
        word: "Ventilador",
        alias: [
            "Ar"
        ]
    }, {
        word: "Nadar",
        alias: [
            "Piscina",
            "Praia"
        ]
    }, {
        word: "Hidratar",
        unlock: 2
    }, {
        word: "Sorvete",
        unlock: 3,
        alias: [
            "Gelo"
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
