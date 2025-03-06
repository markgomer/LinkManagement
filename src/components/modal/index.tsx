import {
    View,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Option } from "@/components/option";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { useState } from "react";

type Props = {
    isOpen: boolean
}

export function DetailsModal({ isOpen } : Props) {
    const [isModalOpen, setOpen] = useState(isOpen)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalOpen}
        >
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}>Curso</Text>
                        <TouchableOpacity onPress={()=>setOpen(false)}>
                            <MaterialIcons
                                name="close"
                                size={24}
                                color={colors.gray[400]}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.modalLinkName}>Title</Text>
                    <Text style={styles.modalURL}>www.url.com.br</Text>
                    <View style={styles.optionsContainer}>
                        <Option name="Open" icon="language" variant="primary"/>
                        <Option name="Close" icon="close" variant="secondary"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
