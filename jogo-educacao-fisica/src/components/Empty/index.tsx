import { X } from "phosphor-react-native";
import {
    View
} from "react-native";
import Font from "../Font";

import styles from "./styles";

interface Props {
    icon?: React.ReactNode;
    title: string;
    desc?: string;
}

export default function Empty({ title, desc, icon }: Props) {
    return (
        <View style={styles.container}>
            {icon || <X size={24} color="#c9c9c9" />}
            <Font name="title" style={styles.title}>{title}</Font>
            <Font name="desc" style={styles.desc}>{desc}</Font>
        </View>
    );
}
