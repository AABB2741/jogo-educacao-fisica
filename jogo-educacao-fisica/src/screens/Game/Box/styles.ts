import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginRight: 10,
        maxHeight: 50
    },
    check: {
        backgroundColor: theme.colors.check_background
    },
    warn: {
        backgroundColor: theme.colors.warn_background
    },
    err: {
        backgroundColor: theme.colors.background2
    },
    text: {
        fontSize: 16,
        textTransform: "uppercase"
    }
});
