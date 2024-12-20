import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type LinkProps = {
    name: string,
    url: string,
}

export function Link({name, url} : LinkProps) {
    return (
        <View style={styles.container}>

            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={styles.url}>
                    {url}
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.5}>
                <MaterialIcons
                    name="more-horiz"
                    size={20}
                    color={colors.gray[400]}
                />
            </TouchableOpacity>

        </View>
    )
}