import {
    Image,
    ImageSourcePropType,
    Pressable,
    TouchableOpacity,
    View
} from "react-native";

import Font from "../Font";

import styles from "./styles";

interface OptionProps {
    icon: React.ReactNode;
    onPress?: any;
}

interface Props {
    title?: string;
    icon?: ImageSourcePropType;
    onPressIcon?: () => void;
    leftOptions?: OptionProps[];
    rightOptions?: OptionProps[];
    hideFloat?: boolean;
    credit?: {
        icon: React.ReactNode;
        count: number;
    }
}

export default function Header({ title, icon, onPressIcon, rightOptions, leftOptions, credit, hideFloat }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.optionContainer}>
                {(leftOptions || []).map((option, i) => (
                    <TouchableOpacity key={i} style={styles.optionLeft} onPress={option.onPress}>
                        {option.icon}
                    </TouchableOpacity>
                ))}
                { icon && (
                    <Pressable onPress={onPressIcon}>
                        <Image source={icon} style={styles.icon} resizeMode="contain" />
                    </Pressable>
                )}
                <Font name="title" numberOfLines={1} style={styles.title}>{title}</Font>
            </View>
            <View style={styles.optionContainer}>
                {(rightOptions || []).map((option, i) => (
                    <TouchableOpacity key={i} style={styles.option} onPress={option.onPress}>
                        {option.icon}
                    </TouchableOpacity>
                ))}
            </View>
            {/* {
                hideFloat || (
                    <View style={styles.float}>
                        <View style={styles.credits}>
                            {credit?.icon}
                            <Font name="coins" style={styles.creditsText}>{credit?.count}</Font>
                        </View>
                        <View style={styles.coins}>
                            <Coins color={theme.colors.coins} />
                            <Font name="coins" style={styles.coinsText}>{coins ?? 0}</Font>
                        </View>
                    </View>
                )
            } */}
        </View>
    );
}
