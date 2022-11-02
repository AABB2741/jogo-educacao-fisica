import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background2,
        width: "30%",
        padding: 10,
        borderRadius: 8,
        marginBottom: "3%",
        flexDirection: "row",
        alignItems: "center"
    },
    levelName: {
        color: theme.colors.font,
        marginLeft: 5,
        fontSize: 12
    }
});
