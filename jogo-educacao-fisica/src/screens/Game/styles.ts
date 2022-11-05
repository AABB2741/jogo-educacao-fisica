import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {},
    guessModalContent: {
        backgroundColor: theme.colors.background,
        flex: 1
    },
    guessModalHeader: {
        backgroundColor: theme.colors.background2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    guessModalInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        fontFamily: theme.fonts.input
    }
});
