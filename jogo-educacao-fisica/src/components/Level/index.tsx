import {
    TouchableOpacity
} from "react-native";
import Font from "../Font";

import styles from "./styles";

interface Props {
    icon: React.ReactNode;
    id: number;
    name: number | string;
}

export default function Level({ icon, id, name }: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            {icon}
            <Font name="title" style={styles.levelName}>{`Nível ${name}`}</Font>
        </TouchableOpacity>
    );
}
