import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    options: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    questionContainer: {
        padding: 20,
        minHeight: 250,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    question: {
        color: theme.colors.font2,
        fontSize: 20
    },
    noImage: {
        color: theme.colors.font,
        textAlign: "center",
        paddingVertical: 30
    }
});
