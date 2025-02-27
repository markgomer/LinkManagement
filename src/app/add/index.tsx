import { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"
import { router } from "expo-router"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { CategoryList } from "@/components/categoryList"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Add() {
    const [name, setName] = useState<string>()
    const [url, setUrl] = useState<string>()

    function handleAdd() {
        console.log({name, url})
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
            <CategoryList />
            
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

                {/* DEBUG */}
                <Text style={styles.title}>{name}</Text> 
            </View>
        </View>
    )
}
