import {
    View,
    Image,
    ImageSourcePropType
} from "react-native";
import Font from "../Font";

import styles from "./styles";

interface Props {
    name: string;
    desc: string;
    color: string;
    image: ImageSourcePropType;
}

export default function Season({ name, desc, color, image }: Props) {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <View>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Font name="seasons" style={styles.seasonName}>{name}</Font>
                <Font name="desc" style={styles.seasonDesc}>{desc}</Font>
            </View>
        </View>
    );
}
