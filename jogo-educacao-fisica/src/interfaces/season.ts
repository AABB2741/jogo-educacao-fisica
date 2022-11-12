import {
    ImageSourcePropType
} from "react-native";
import { LevelProp } from "./level";

export default interface SeasonProp {
    id: seasons;
    name: string;
    desc: string;
    image: ImageSourcePropType;
    color: string;
    levels: LevelProp[];
}
