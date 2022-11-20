import {
    View,
    Image,
    ImageSourcePropType
} from "react-native";
import Font from "../Font";
import { Flower, Leaf, Snowflake, Sun } from "phosphor-react-native";

import styles from "./styles";

import Level from "../Level";
import SeasonProp from "../../interfaces/season";
import { useStorage } from "../../contexts/storage";

interface Props extends SeasonProp {

}

export default function Season({ id, name, desc, color, image, levels }: Props) {
    const { storage } = useStorage();

    function getIcon(icon: seasons) {
        switch(icon) {
            case "summer":
                return <Sun size={16} weight="fill" />;
            case "falls":
                return <Leaf size={16} weight="fill" />
            case "winter":
                return <Snowflake size={16} weight="fill" />
            case "spring":
                return <Flower size={16} weight="fill" />
        }
    }

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
            <View style={styles.levels}>
                {levels.map((level, i) => (
                    <Level
                        name={i+1}
                        id={level.id}
                        icon={getIcon(level.seasonId)}
                        done={((storage.levels ?? []).find(l => l.id == level.id)?.found ?? []).length >= level.words.length}
                        key={level.id}
                    />
                ))}
            </View>
        </View>
    );
}
