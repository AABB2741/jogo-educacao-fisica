import {
    TouchableOpacity
} from "react-native";
import { Check } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Font from "../Font";

import styles from "./styles";
import { PlayParamList } from "../../@types/navigation";
import theme from "../../utils/theme";

interface Props {
    icon: React.ReactNode;
    id: number;
    name: number | string;
    done: boolean;
}

export default function Level({ icon, id, name, done }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<PlayParamList, "PlayHome">>();
    return (
        <TouchableOpacity style={[styles.container, done && { backgroundColor: theme.colors.check_background }]} onPress={() => navigation.navigate("Game", { id })}>
            {done ? <Check size={16} color={theme.colors.check} /> : icon}
            <Font name="title" style={styles.levelName}>{`Nível ${name}`}</Font>
        </TouchableOpacity>
    );
}
