import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 16,
        color: theme.colors.font,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 5
    },
    desc: {
        fontSize: 14,
        color: theme.colors.desc,
        textAlign: "center"
    }
});
