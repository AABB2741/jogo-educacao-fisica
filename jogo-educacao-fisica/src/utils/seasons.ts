import Season from "../interfaces/season";
import levels from "./levels";

const seasons: Season[] = [{
    id: "summer",
    image: require("../../assets/imgs/summer.png"),
    name: "Verão",
    desc: "Ah, o verão. A melhor estação para ir para a praia e aproveitar o calor. Conclua os níveis temáticos de verão e ganhe Sóis.",
    color: "#FFE194",
    levels: levels.filter(l => l.seasonId == "summer")
}, {
    id: "falls",
    image: require("../../assets/imgs/falls.png"),
    name: "Outono",
    desc: "Se tem algo que somente o outono tem, é beleza! Conclua os níveis temáticos do outono e ganhe Folhas.",
    color: "#f59842",
    levels: []
}, {
    id: "winter",
    image: require("../../assets/imgs/winter.png"),
    name: "Inverno",
    desc: "Não é perfeito maratonar suas séries favoritas debaixo de um cobertor tomando chocolate quente? Conclua os níveis temáticos do inverno e ganhe Flocos de Neve.",
    color: "#9ce3ff",
    levels: []
}, {
    id: "spring",
    image: require("../../assets/imgs/spring.png"),
    name: "Primavera",
    desc: "A natureza é linda né? Sem dúvidas, a época mais bonita para aproveitar as belezas da natureza. Conclua os níveis temáticos da primavera e ganhe Flores.",
    color: "#c0ffbd",
    levels: []
}];

export default seasons;
