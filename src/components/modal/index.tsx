import {
    View,
    Modal,
    Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function DetailsModal() {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}>Curso</Text>
                        <MaterialIcons
                            name="close"
                            size={24}
                            color={colors.gray[400]}
                        />
                    </View>
                    <Text style={styles.modalLinkName}>Title</Text>
                    <Text style={styles.modalURL}>www.url.com.br</Text>
                </View>
            </View>
        </Modal>
    )
}
