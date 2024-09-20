import {
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { ICar } from "types/api";
import { Star } from "components/icons";
import { HomeNavigationProp, HomeProp } from "types/navigation";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function CarBox({ car }: { car: ICar }) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const navigation = useNavigation<HomeProp>()
    return (
        <TouchableOpacity
            style={{
                width: width * 0.6,
                marginRight: 20,
            }}
            onPress={() => navigation.navigate("CarDetail", {car: car})}
        >
            <Image
                style={{
                    height: height * 0.2,
                    width: width * 0.6,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
                source={{ uri: car.imageUri[0] }} />
            <Text style={{
                color: colors.textPrimary,
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
            }}>
                {car.name}
            </Text>
            <View
                style={{
                    height: 20,
                    flexDirection: 'row',
                }}
            >
                <Star height={24} width={24} color={'#F2DA5E'} />
                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 16, color: colors.textPrimary }}> 4.5 </Text>
                <Text style={{ fontFamily: 'Monsterrat-Light', fontSize: 16, color: colors.textSecondary }}>(124 review)</Text>
            </View>
            <Text style={{
                margin: 5,
                fontFamily: 'Montserrat-Bold', 
                fontSize: 16, 
                color: "#36E1F8" }}>
                    $15 / day
            </Text>
        </TouchableOpacity>
    );
}
