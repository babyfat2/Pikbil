import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import React from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { useAppSelector } from "redux/hooks.ts/hooks";
import Animated from "react-native-reanimated";
import { useGetAllCarQuery, useGetAllDiscountQuery } from "redux/api/service";
import DiscountBox from "components/main/Home/discountBox";
import { StatusBar } from "expo-status-bar";
import HeaderHome from "components/main/Home/header";
import CarBox from "components/main/Home/carBox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Home() {
    const { colors, styles } = useStyles(createStyles);
    const user = useAppSelector((state) => (state.user.data));
    const allCar = useGetAllCarQuery(null);
    const allDiscount = useGetAllDiscountQuery(null);
    return (
        <Animated.View
            style={styles.container}
        >
            <StatusBar animated={false} backgroundColor="transparent" />
            <HeaderHome />
            <FlatList
            showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={allDiscount.currentData}
                renderItem={(item) => <DiscountBox discount={item.item} />}
            />
            <View style={styles.viewTopVehicle}>
                <Text style={styles.textTopVehicle}>Top vehicle</Text>
                <TouchableOpacity>
                    <Text style={styles.textSeeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={allCar.currentData}
                renderItem={(item) => <CarBox car={item.item} />}
            />
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 0.05 * width,
            backgroundColor: colors.backgroundColor,
        },
        statusbar: {
            height: 0.1 * height,
        },
        viewTopVehicle: {
            marginTop: 20,
            marginBottom: 10,
            height: height / 20,
            width: width * 0.9,
        },
        textTopVehicle: {
            position: 'absolute',
            left: 0,
            fontFamily: 'Montserrat-Bold',
            color: colors.textPrimary,
            fontSize: 20,
        },
        textSeeAll: {
            position: 'absolute',
            right: 0,
            fontFamily: "Monstserrat-Light",
            color: colors.textSecondary,
            fontSize: 20,
        }
    });
export default Home;