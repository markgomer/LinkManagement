import { useState, useEffect } from "react";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Link } from "@/components/link";
import { DetailsModal } from "@/components/modal";
import { CategoryList } from "@/components/categoryList";

import { linkStorage, LinkStorage } from "@/storage/link-storage";

export default function Index() {
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks() {
        try {
            const linkStorageListResponse = await linkStorage.get()
            setLinks(linkStorageListResponse)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links")
        }
    }

    // useEffect(() => {}, []) função, dependências
    // Se a lista de dependências estiver vazia, o useEffect é chamado toda vez
    // que o componente é carregado
    useEffect(() => {
        getLinks()
        console.log("CHAMOU o useEffect!")
    }, [category]) // toda vez que essas dependências mudarem, o useEffect é chamado

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
                data={links} // useState links. LinkStorage[]
                keyExtractor={(item) => item.id} // item do tipo LinkStorage
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                    />
                )}
                style={styles.linkList}
                contentContainerStyle={styles.linkListContent}
            >
            </FlatList>
            <DetailsModal />

    </View>
  )
}
