import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

export default function Add() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Back icon */}
                <TouchableOpacity>
                    <MaterialIcons
                        name="arrow-back"
                        size={32} 
                        color={colors.gray[200]}
                    />
                </TouchableOpacity>
                {/* Title */}
                <Text style={styles.title}> Novo </Text>

            </View>

            <Text style={styles.label}> Selecione uma categoria </Text>

        </View>
    )
}
