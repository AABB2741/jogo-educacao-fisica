import {
    TouchableOpacity,
    View
} from "react-native";
import { Coins } from "phosphor-react-native";

import Font from "../Font";

import styles from "./styles";
import theme from "../../utils/theme";

interface OptionProps {
    icon: React.ReactNode;
    onPress?: () => void;
}

interface Props {
    title?: string;
    leftOptions?: OptionProps[];
    rightOptions?: OptionProps[];
    hideCoins?: boolean;
    credit?: {
        icon: React.ReactNode;
        count: number;
    }
}

export default function Header({ title, rightOptions, credit }: Props) {
    return (
        <View style={styles.container}>
            <Font name="title" numberOfLines={1} style={styles.title}>{title}</Font>
            <View style={styles.optionContainer}>
                {(rightOptions || []).map((option, i) => (
                    <TouchableOpacity key={i} style={styles.option}>
                        {option.icon}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.float}>
                <View style={styles.credits}>
                    {credit?.icon}
                    <Font name="coins" style={styles.creditsText}>{credit?.count}</Font>
                </View>
                <View style={styles.coins}>
                    <Coins color={theme.colors.coins} />
                    <Font name="coins" style={styles.coinsText}>5000</Font>
                </View>
            </View>
        </View>
    );
}
