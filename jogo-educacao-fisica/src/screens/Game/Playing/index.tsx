import { Question, X } from "phosphor-react-native";
import {
    Modal,
    ModalProps,
    ScrollView,
    View
} from "react-native";
import Font from "../../../components/Font";
import Header from "../../../components/Header";
import theme from "../../../utils/theme";

import styles from "./styles";

interface Props extends ModalProps {
    word: string;
}

export default function Playing({ word, ...rest }: Props) {
    return (
        <Modal {...rest} animationType="slide">
            <ScrollView style={styles.container}>
                <Header
                    hideFloat
                    title="Dê um palpite"
                    leftOptions={[{
                        icon: <X color={theme.colors.font} />,
                        onPress: rest.onRequestClose
                    }]}
                    rightOptions={[{
                        icon: <Question color={theme.colors.font} />
                    }]}
                />
            </ScrollView>
        </Modal>
    );
}
