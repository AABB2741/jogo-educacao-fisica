import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    block: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: theme.colors.background2,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    blockText: {
        fontSize: 18,
        color: theme.colors.font,
        textTransform: "uppercase"
    }
});
