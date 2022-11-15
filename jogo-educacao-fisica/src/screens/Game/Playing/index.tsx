import { CheckCircle, Question, X } from "phosphor-react-native";
import {
    Modal,
    ModalProps,
    ScrollView,
    TextInput,
    View
} from "react-native";

import { WordProps } from "../../../interfaces/level";

import Font from "../../../components/Font";
import Header from "../../../components/Header";
import theme from "../../../utils/theme";

import styles from "./styles";
import Row from "../Row";

interface Props extends ModalProps {
    word: string;
    question: string;
    percent: number;
    tries: string[];
}

export default function Playing({ question, word, percent, ...rest }: Props) {
    return (
        <Modal {...rest} animationType="slide">
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
            <ScrollView style={styles.container}>
                <View style={styles.doneContainer}>
                    <View style={styles.doneContent}>
                        <CheckCircle weight="fill" />
                        <Font name="title" style={styles.done}>Palavra encontrada</Font>
                    </View>
                    <Font name="coins" style={{ color: theme.colors.check }}>{`${percent.toFixed(0)}%`}</Font>
                </View>
                <View style={styles.questionContainer}>
                    <Font name="seasons">{question}</Font>
                </View>
                <View>
                    <Row word={word} guess="VASCO" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput maxLength={word.length} style={styles.input} placeholder="O que você está pensando?" />
                </View>
            </ScrollView>
        </Modal>
    );
}
