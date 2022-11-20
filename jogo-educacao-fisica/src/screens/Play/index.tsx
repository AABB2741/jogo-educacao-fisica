import { useState } from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import { Sun } from "phosphor-react-native";

import seasons from "../../utils/seasons";

import Header from "../../components/Header";
import Season from "../../components/Season";

import styles from "./styles";
import levels from "../../utils/levels";
import theme from "../../utils/theme";
import Settings from "./Settings";

export default function Play() {
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Settings
                visible={settingsOpen}
                onRequestClose={() => setSettingsOpen(false)}
            />
            <Header
                title="TURNO"
                credit={{
                    icon: <Sun color={theme.colors.credits} />,
                    count: 1190
                }}
            />
            <FlatList
                contentContainerStyle={{ paddingTop: 50, borderBottomWidth: 100, borderBottomColor: seasons.find(s => s.id == "spring")?.color }}
                data={seasons}
                renderItem={({item}) => <Season {...item} levels={levels.filter(l => l.seasonId == item.id)} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
