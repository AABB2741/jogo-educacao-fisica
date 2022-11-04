import Season from "../interfaces/season";
import { summer } from "./levels";

const seasons: Season[] = [{
    id: "summer",
    image: require("../../assets/imgs/summer.png"),
    name: "Verão",
    desc: "Ah, o verão. A melhor estação para ir para a praia e aproveitar o calor. Conclua os níveis temáticos de verão e ganhe Sóis.",
    color: "#FFE194",
    levels: summer
}, {
    id: "falls",
    image: require("../../assets/imgs/falls.png"),
    name: "Outono",
    desc: "Outono... muito TOP!",
    color: "#f59842",
    levels: []
}, {
    id: "winter",
    image: require("../../assets/imgs/winter.png"),
    name: "Inverno",
    desc: "Inverno... frio!",
    color: "#9ce3ff",
    levels: []
}, {
    id: "spring",
    image: require("../../assets/imgs/spring.png"),
    name: "Primavera",
    desc: "Primavera... loko!",
    color: "#c0ffbd",
    levels: []
}];

export default seasons;
