import {
    View,
    Image,
    ImageSourcePropType
} from "react-native";
import Font from "../Font";
import { Sun } from "phosphor-react-native";

import styles from "./styles";

import Level from "../Level";
import LevelProps from "../../interfaces/Level";

interface Props {
    name: string;
    desc: string;
    color: string;
    image: ImageSourcePropType;
    levels: LevelProps[];
}

export default function Season({ name, desc, color, image, levels }: Props) {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.presentation}>
                <View>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Font name="seasons" style={styles.seasonName}>{name}</Font>
                    <Font name="desc" style={styles.seasonDesc}>{desc}</Font>
                </View>
            </View>
            <View style={styles.doneCount}>
                <Font name="title" style={styles.doneLevels}>{`0/${levels.length}`}</Font>
                <Font name="subtitle" style={styles.totalLevels}>níveis concluídos</Font>
            </View>
            <View style={styles.levels}>
                {levels.map((level, i) => (
                    <Level name={i+1} id={level.id} icon={<Sun size={16} weight="fill" />} key={level.id} />
                ))}
            </View>
        </View>
    );
}
