import { useState } from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import { Eye, Sun, Trash } from "phosphor-react-native";

import seasons from "../../utils/seasons";

import Header from "../../components/Header";
import Season from "../../components/Season";

import styles from "./styles";
import levels from "../../utils/levels";
import theme from "../../utils/theme";
import Settings from "./Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStorage } from "../../contexts/storage";

export default function Play() {
    const { storage, setStorage } = useStorage();
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
                rightOptions={[{
                    icon: <Trash weight="fill" />,
                    onPress: () => {
                        AsyncStorage.clear();
                        setStorage({});
                    }
                }, {
                    onPress: () => {
                        console.log(storage);
                    },
                    icon: <Eye weight="fill" />
                }]}
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
