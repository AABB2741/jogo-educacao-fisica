import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 10,
        marginVertical: 10
    },
    correct: {
        backgroundColor: theme.colors.check_background
    },
    incorrect: {
        backgroundColor: theme.colors.background2
    },
    misplaced: {
        backgroundColor: theme.colors.warn_background
    },
    box: {
        padding: 5,
        flex: 1,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginRight: 10
    },
    letter: {
        fontSize: 16,
        textTransform: "uppercase"
    }
});
