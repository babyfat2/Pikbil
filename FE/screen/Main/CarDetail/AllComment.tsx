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
import Animated from "react-native-reanimated";
import { AllCommentNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import CarBoxAll from "components/main/AllCar/CarBoxAll";
import CarBoxAllSkeleton from "components/main/AllCar/CarBoxAllSkeleton";
import { useGetCommentByCarQuery } from "redux/api/service";
import CarComment from "components/main/CarDetail/CarComment";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AllComment({ navigation, route }: AllCommentNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const comment = useGetCommentByCarQuery(route.params.carId);
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
                <Text style={styles.textAllComment}>ALL REVIEW</Text>
            </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={comment.data}
                    renderItem={(item) => <CarComment comment={item.item} />}
                />
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
        },
        header: {
            marginTop: height * 0.05,
            marginLeft: width / 15,
            height: height * 0.08,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textAllComment: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginLeft: 20,
            color: colors.textPrimary,
        },
    });
export default AllComment;