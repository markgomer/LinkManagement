import { useState } from "react";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Link } from "@/components/link";
import { DetailsModal } from "@/components/modal";
import { CategoryList } from "@/components/categoryList";

export default function Index() {
    const [category, setCategory] = useState(categories[0].name)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons
                        name="add"
                        size={32}
                        color={colors.green[300]}
                    />
                </TouchableOpacity>
            </View>
            <CategoryList selected={category} onChange={setCategory} />
            <FlatList
                data={["1", "2", "3", "4", "5"]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link name="Shwrowbow Test!" url="wikipedia.com"/>
                )}
                style={styles.linkList}
                contentContainerStyle={styles.linkListContent}
            >
            </FlatList>
            <DetailsModal />

    </View>
  )
}
