import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { CategoryList } from "@/components/categoryList";
import { Link } from "@/components/link";
import { DetailsModal } from "@/components/modal";

export default function Index() {
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
            <CategoryList />
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
