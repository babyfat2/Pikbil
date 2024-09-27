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
import { AllCarNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import { useGetAllCarQuery } from "redux/api/service";
import CarBoxSkeleton from "components/main/Home/carBoxSkeleton";
import CarBox from "components/main/Home/carBox";
import CarBoxAll from "components/main/AllCar/CarBoxAll";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AllCar({ navigation, route }: AllCarNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const allCar = useGetAllCarQuery(null);
    return (
        <Animated.View
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textAllCar}>ALL CAR</Text>
            </View>
            {allCar.isLoading ?
                <CarBoxSkeleton />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={allCar.data}
                    renderItem={(item) => <CarBoxAll car={item.item} />}
                />
            }
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: width / 15,
            backgroundColor: colors.backgroundColor,
        },
        header: {
            marginTop: 25,
            height: height * 0.08,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textAllCar: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginLeft: 20,
            color: colors.textPrimary,
        },
    });
export default AllCar;