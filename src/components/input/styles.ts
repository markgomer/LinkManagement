import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[800],
        height: 52,
        width: "100%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray[600],
        padding: 10, // text padding inside the input box
        color: colors.gray[100], // text color
        fontSize: 16
    }
})
