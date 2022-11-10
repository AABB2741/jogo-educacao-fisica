import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

export default function Progress() {
    return (
        <View style={styles.container}>
            <View style={styles.progress}>
                <Font name="coins" style={styles.percent}>57%</Font>
                <Font name="subtitle" style={styles.percentLabel}>do nível concluído.</Font>
            </View>
        </View>
    );
}
