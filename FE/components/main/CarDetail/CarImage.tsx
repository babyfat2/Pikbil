import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable, Touchable, TouchableOpacity } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";
import { Left } from "components/icons";
import { colors } from "react-native-swiper-flatlist/src/themes";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const CarImage = ({ images }: { images: string[] }) => {
    const colors = useAppSelector((state) => state.darkMode.color)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={0}
                showPagination
                data={images}
                renderItem={({ item }) => (
                    <Image style={{ height: height, width: width }} source={{ uri: item }} />
                )}
            />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 20, top: height * 0.1 , backgroundColor: colors.primary, padding : 10, borderRadius: 10, }}
            >
                <Left height={28} width={28} color={"#FFF"} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
});

export default CarImage;
