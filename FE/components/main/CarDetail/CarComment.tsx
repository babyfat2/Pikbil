import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable, Touchable, TouchableOpacity } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from "@react-navigation/native";
import { Left, Star } from "components/icons";
import { IComment } from "types/api";
import { colors } from "react-native-swiper-flatlist/src/themes";
import useStyles from "style/useStyles";
import { IColor } from "style/color";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const CarComment = ({ comment }: { comment: IComment | undefined}) => {
    const { colors, styles } = useStyles(createStyles);
    return (
        <View style={styles.container}>
            <View style={styles.containerAvatar}>
            <View style= {styles.viewStar}>
                <Star height={width*0.08} width={height*0.08} color={'#F2DA5E'} />
                <Text style={styles.textStar}>4.5</Text>
            </View>
            </View>
        </View>
    );
};
/*
{comment.userComment.avatar ?
    <Image 
        style={{ width: 40, height: 40, borderRadius: 2, }} 
        source={require('../../../assets/car.png')} 
    />
    :
    <Image 
    style={{ width: 40, height: 40, borderRadius: 2, }} 
    source={{ uri: comment.userComment.avatar }} 
    />
}
    */
const createStyles = (colors: IColor) =>
    StyleSheet.create({
    container: {
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        flexDirection: 'row',
    },
    containerAvatar: {
        width: width * 0.1,
        flexDirection: 'column',
    },
    viewStar: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    textStar: {
        marginLeft: 5,
        fontSize: 14,
        color: colors.textSecondary
    }
});

export default CarComment;
