import {
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
    Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { CategoryList } from "@/components/categoryList";
import { Link } from "@/components/link";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                />
                <TouchableOpacity>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <MaterialIcons
                                name="close"
                                size={24}
                                color={colors.gray[400]}
                            />
                        </View>
                        <Text style={styles.modalLinkName}>Title</Text>
                        <Text style={styles.modalURL}>www.url.com.br</Text>
                    </View>
                </View>
            </Modal>


    </View>
  )
}
