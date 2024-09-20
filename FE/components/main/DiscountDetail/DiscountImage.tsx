import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable, Touchable, TouchableOpacity } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";
import { Left } from "components/icons";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const DiscountImage = ({ image }: { image: string }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Image style={{ height: height, width: width }} source={{ uri: image }} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 20, top: height * 0.1 }}
            >
                <Left height={36} width={28} color={"#FFF"} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
    },
});

export default DiscountImage;
