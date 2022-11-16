import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    out: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: theme.colors.background,
        padding: 20,
        width: 300,
        borderRadius: 16
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    title: {
        color: theme.colors.font,
        fontSize: 16
    },
    desc: {
        fontSize: 14,
        color: theme.colors.font
    }
});
