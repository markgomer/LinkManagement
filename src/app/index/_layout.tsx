import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

export default function Layout() {
    const BG_COLOR = colors.gray[950]

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: BG_COLOR
                }
            }}
        />
    )
}


