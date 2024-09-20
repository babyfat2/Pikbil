import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import Animated from "react-native-reanimated";
import { CarDetailNavigationProp } from "types/navigation";
import CarImage from "components/main/CarDetail/CarImage";
import CarDecription from "components/main/CarDetail/CarDecription";
import HostDetail from "components/main/CarDetail/HostDetail";
import CarComment from "components/main/CarDetail/CarComment";
import RentCar from "components/main/CarDetail/RentCar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function CarDetail({navigation, route}: CarDetailNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const car = route.params.car;
    console.log(height);
    return (
        <Animated.View
            style={styles.container}
        >
            <ScrollView>
            <CarImage images={car.imageUri} />
            <CarDecription 
            name={car.name} 
            description={car.description} 
            fuel={car.fuel} 
            interiorColor={car.interiorColor} 
            kilometers={car.kilometers} 
            seats={car.seats} 
            transmission={car.transmission}
            address = {car.address} />
            <HostDetail owner={car.owner}/>
            <CarComment comment={undefined} />
            </ScrollView>
            <RentCar car={car} />
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
        },
    });
export default CarDetail;