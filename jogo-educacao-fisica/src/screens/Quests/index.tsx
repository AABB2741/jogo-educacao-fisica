import {
    View,
    ScrollView
} from "react-native";

import styles from "./styles";

import Header from "../../components/Header";
import Font from "../../components/Font";

export default function Quests() {
    return (
        <View style={styles.container}>
            <Header title="Missões" hideFloat />
            <ScrollView style={styles.content}>
                <View style={styles.mainQuest}>
                    <Font name="obs" style={styles.mainText}>MISSÃO PRINCIPAL</Font>
                    <Font name="title" style={styles.quest}>Próxima parada...</Font>
                </View>
            </ScrollView>
        </View>
    );
}
