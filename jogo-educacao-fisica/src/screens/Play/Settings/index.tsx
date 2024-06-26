import { Trash } from "phosphor-react-native";
import {
    View
} from "react-native";
import Font from "../../../components/Font";
import Popup from "../../../components/Popup";
import { useStorage } from "../../../contexts/storage";
import theme from "../../../utils/theme";
import Option from "../Option";
import * as Storage from "../../../utils/storage";

import styles from "./styles";

interface Props {
    visible: boolean;
    onRequestClose?: () => void;
}

export default function Settings({ visible, onRequestClose }: Props) {
    const { setStorage } = useStorage();

    return (
        <Popup
            visible={visible}
            title="Configurações"
            onRequestClose={onRequestClose}
        >
            <View style={styles.category}>
                <Font name="coins" style={styles.categoryTitle}>Configurações de desenvolvedor</Font>
                <Option
                    icon={<Trash color={theme.colors.err} />}
                    label="Excluir dados salvos"
                    onPress={() => {
                        Storage.setItem("progress", {}).then(() => setStorage({}));
                        console.log("Apagando os baguio")
                    }}
                />
            </View>
        </Popup>
    );
}
