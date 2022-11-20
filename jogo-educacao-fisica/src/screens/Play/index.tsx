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
import Popup from "../../components/Popup";

export default function Play() {
    const { storage, setStorage } = useStorage();
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [hackModalVisible, setHackModalVisible] = useState(false);
    const [steps, setSteps] = useState(0);

    return (
        <View style={styles.container}>
            <Settings
                visible={settingsOpen}
                onRequestClose={() => setSettingsOpen(false)}
            />
            <Popup
                title="Trapaça ativada"
                desc={`Você ativou o Modo Trapaça. Se você entrar nos níveis com o Modo Trapaça ativado, poderá pressionar e segurar alguma palavra do Jogo de letras para revelar.\nVocê pode desabilitar o Modo Trapaça pressionando novamente a logo do jogo.`}
                visible={hackModalVisible}
                onRequestClose={() => setHackModalVisible(false)}
            />
            <Header
                icon={storage.enableHack ? require("../../../assets/imgs/logo-hacked.png") : require("../../../assets/imgs/logo.png")}
                onPressIcon={storage.enableHack ? () => {
                    setStorage({ ...storage, enableHack: false });
                    setSteps(0);
                } : () => {
                    if (steps >= 5) {
                        setStorage({ ...storage, enableHack: true });
                        setHackModalVisible(true);
                    } else setSteps(steps + 1);
                }}
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
                data={seasons}
                renderItem={({item}) => <Season {...item} levels={levels.filter(l => l.seasonId == item.id)} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
