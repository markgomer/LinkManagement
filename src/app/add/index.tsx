import { useState } from "react"
import { router } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity, Alert } from "react-native"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { CategoryList } from "@/components/categoryList"

export default function Add() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    function handleAdd() {
        if(!category) {
            return Alert.alert("Categoria", "Selecione a categoria");
        }
        if(!name.trim()) {
            return Alert.alert("Nome", "Informe o nome");
        }
        if(!url.trim()) {
            return Alert.alert("URL", "Informe a URL");
        }
        console.log({ category, name, url });
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
                />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}
