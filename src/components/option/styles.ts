import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTitle: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.green[300],
    },
    secondaryTitle: {
        fontSize: 12,
        color: colors.gray[400],
    },
})
