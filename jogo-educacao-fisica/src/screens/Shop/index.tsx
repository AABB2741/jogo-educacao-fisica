import {
    View
} from "react-native";
import Header from "../../components/Header";

import styles from "./styles";

export default function Shop() {
    return (
        <View style={styles.container}>
            <Header title="Loja" />
        </View>
    );
}
