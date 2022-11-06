import { CaretLeft } from "phosphor-react-native";
import {
    Modal,
    ScrollView,
    TextInput,
    View
} from "react-native";
import Header from "../../components/Header";
import Row from "./Row";

import styles from "./styles";

interface Props {
    word: string;
    visible?: boolean;
    onRequestClose?: () => void;
}

export default function Termo({ visible, word, onRequestClose }: Props) {
    return (
        <Modal onRequestClose={onRequestClose}>
            <Header title="Encontre por palavras parecidas" hideFloat leftOptions={[{
                icon: <CaretLeft />,
                onPress: onRequestClose
            }]} />
            <ScrollView style={styles.content}>
                <View>
                    <Row word={word} guess="Teste" />
                    <Row word={word} />
                    <Row word={word} />
                    <Row word={word} />
                    <Row word={word} />
                    <Row word={word} />
                </View>
                <View>
                    <TextInput placeholder="Algum palpite?" style={styles.guess} />
                </View>
            </ScrollView>
        </Modal>
    );
}
