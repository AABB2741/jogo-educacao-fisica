import {
    TouchableOpacity
} from "react-native";
import { Check } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Font from "../Font";

import styles from "./styles";
import { PlayParamList } from "../../@types/navigation";

interface Props {
    icon: React.ReactNode;
    id: number;
    name: number | string;
}

export default function Level({ icon, id, name }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<PlayParamList, "PlayHome">>();
    // <TouchableOpacity style={[styles.container, {backgroundColor: theme.colors.check_background}]}>
    /* <Check size={14} weight="bold" color={theme.colors.check} /> */
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Game", { id })}>
            {icon}
            <Font name="title" style={styles.levelName}>{`Nível ${name}`}</Font>
        </TouchableOpacity>
    );
}
