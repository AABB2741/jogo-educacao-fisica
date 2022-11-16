import { X } from "phosphor-react-native";
import {
    View,
    Pressable,
    Modal,
    ModalProps,
    TouchableOpacity,
    ViewStyle
} from "react-native";
import theme from "../../utils/theme";
import Font from "../Font";

import styles from "./styles";

interface Props extends ModalProps {
    contentContainerStyle?: ViewStyle;
    title?: string;
    desc?: string;
    children?: React.ReactNode;
}

export default function Popup({ title, desc, children, onRequestClose, contentContainerStyle, ...rest }: Props) {
    return (
        <Modal transparent animationType="fade" {...rest}>
            <View style={styles.container}>
                <Pressable style={styles.out} onPress={onRequestClose} />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Font name="title" style={styles.title}>{title}</Font>
                        <TouchableOpacity onPress={onRequestClose}>
                            <X size={20} color={theme.colors.font} />
                        </TouchableOpacity>
                    </View>
                    <Font name="desc" style={[styles.desc, !desc && { display: "none" }]}>{desc}</Font>
                    <View style={{ ...contentContainerStyle }}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
}
