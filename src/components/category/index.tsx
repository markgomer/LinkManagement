import { Pressable, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

export function Category() {
    return (
        <Pressable style={styles.container}>
            <MaterialIcons name="code" size={16} color={colors.gray[400]}/>
            <Text style={styles.name}>Projects</Text>
        </Pressable>

    )
}
