import { View, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { categories } from "@/utils/categories"

import { Category } from "@/components/category"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                />
                <TouchableOpacity activeOpacity={0.5}>
                    <MaterialIcons
                        name="add"
                        size={32}
                        color={colors.green[300]}
                    />
                </TouchableOpacity>
            </View>
            <Category
                name={categories[2].name}
                icon={categories[2].icon}
                isSelected
            />
            <Category name="Shopping" icon="shop" isSelected={false} />
            <Category name="Study" icon="book" isSelected={false} />
        </View>
    )
}
