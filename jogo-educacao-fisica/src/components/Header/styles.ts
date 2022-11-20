import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 15,
        height: 55,
        backgroundColor: theme.colors.background2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1
    },
    icon: {
        height: 24,
        width: 125
    },
    title: {
        fontSize: 16,
        color: theme.colors.font
    },
    optionContainer: {
        flexDirection: "row"
    },
    option: {
        paddingLeft: 15
    },
    optionLeft: {
        paddingRight: 15
    },
    float: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 50,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    credits: {
        flexDirection: "row",
    },
    creditsText: {
        color: theme.colors.credits,
        marginLeft: 10
    },
    coins: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.background2,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
    coinsText: {
        color: theme.colors.coins,
        marginLeft: 10
    }
});
