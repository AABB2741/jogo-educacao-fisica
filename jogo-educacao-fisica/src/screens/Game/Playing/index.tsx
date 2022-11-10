import {
    Modal,
    ModalProps,
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props extends ModalProps {
    word: string;
}

export default function Playing({ word, ...rest }: Props) {
    return (
        <Modal {...rest} animationType="slide">
            <Font name="title">{word}</Font>
        </Modal>
    );
}
