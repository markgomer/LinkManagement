import { useState, useCallback } from "react";
import { router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Alert,
    Modal
} from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Link } from "@/components/link";
import { CategoryList } from "@/components/categoryList";
import { Option } from "@/components/option";

import { linkStorage, LinkStorage } from "@/storage/link-storage";

export default function Index() {
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [selectedCategory, setCategory] = useState(categories[0].name)
    const [isModalOpen, setModalOpen] = useState(false)
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage)

    async function getLinks() {
        try {
            const linkStorageListResponse = await linkStorage.get()
            const filtered = linkStorageListResponse.filter(
                (link) => link.category === selectedCategory
            )
            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links")
        }
    }

    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setModalOpen(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir")
            console.log(error)
        }
    }

    async function handleRemove() {
        Alert.alert("Excluir", "Deseja realmente excluir?", [
            { style: "cancel", text: "Não"},
            { text: "Sim", onPress: linkRemove },
        ])
    }

    function handleDetails(selected: LinkStorage) {
        setModalOpen(true)
        setLink(selected)
    }

    useFocusEffect(
        useCallback(() => {
            getLinks()
            console.log("CHAMOU o useEffect!")
        }, [selectedCategory])
    )

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
            <CategoryList selected={selectedCategory} onChange={setCategory} />
            <FlatList
                data={links} // useState links. LinkStorage[]
                keyExtractor={(item) => item.id} // item do tipo LinkStorage
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                        onDetails={() => handleDetails(item)}
                        />
                )}
                style={styles.linkList}
                contentContainerStyle={styles.linkListContent}
            >
            </FlatList>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                {link.category}
                            </Text>
                            <TouchableOpacity onPress={()=>setModalOpen(false)}>
                                <MaterialIcons
                                    name="close"
                                    size={24}
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>{link.name}</Text>
                        <Text style={styles.modalURL}>{link.url}</Text>
                        <View style={styles.optionsContainer}>
                            <Option
                                name="Open"
                                icon="language"
                                variant="primary"
                            />
                            <Option
                                name="Delete"
                                icon="delete"
                                variant="secondary"
                                onPress={handleRemove}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

    </View>
  )
}
