import {
    View,
    TextInput,
    TouchableOpacity,
    TextInputProps
} from "react-native";
import { ArrowRight } from "phosphor-react-native";

import styles from "./styles";

interface Props extends TextInputProps {

}

export default function Input({ ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Dê um palpite..." {...rest} />
            <TouchableOpacity style={styles.button}>
                <ArrowRight size={18} />
            </TouchableOpacity>
        </View>
    );
}
