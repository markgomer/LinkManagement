import { useState } from "react"
import { router } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity, Alert } from "react-native"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { CategoryList } from "@/components/categoryList"
import { linkStorage } from "@/storage/link-storage"

export default function Add() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    async function handleAdd() {
        try {
            if(!category) {
                return Alert.alert("Categoria", "Selecione a categoria");
            }
            if(!name.trim()) {
                return Alert.alert("Nome", "Informe o nome");
            }
            if(!url.trim()) {
                return Alert.alert("URL", "Informe a URL");
            }
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })
            const data = await linkStorage.get()
            console.log(data);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o link")
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Back icon */}
                <TouchableOpacity onPress={() => router.back()}>
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
            <CategoryList selected={category} onChange={setCategory}/>
            
            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                    autoCorrect={false}
                />
                <Input
                    placeholder="URL"
                    onChangeText={setUrl}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}
