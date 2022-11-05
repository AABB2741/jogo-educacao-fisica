import {
    TextInput,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from "react-native";
import { ArrowRight } from "phosphor-react-native";

import styles from "./styles";

interface Props extends TouchableOpacityProps {

}

export default function Input(params: Props) {
    return (
        <TouchableOpacity {...params} >
            <View style={styles.container} pointerEvents="none">
                <TextInput style={styles.input} placeholder="Dê um palpite..." focusable={false} />
                <TouchableOpacity style={styles.button}>
                    <ArrowRight size={18} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
