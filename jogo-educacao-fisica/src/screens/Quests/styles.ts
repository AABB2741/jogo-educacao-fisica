import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background
    },
    content: {},
    mainQuest: {
        padding: 20,
        backgroundColor: theme.colors.accent
    },
    mainText: {
        color: theme.colors.desc2,
        fontSize: 10
    },
    quest: {
        color: theme.colors.font2,
        fontSize: 16
    }
});
