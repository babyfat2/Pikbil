import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React, { useState } from "react";
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { Star } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function ChooseStar({
    star,
    setStar,
}: {
    star: number,
    setStar: React.Dispatch<React.SetStateAction<number>>,
}) {
    const { colors, styles } = useStyles(createStyles);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setStar(1)}>
            <Star height={48} width={48} color={ star >= 1 ? '#F2DA5E' : colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStar(2)}>
            <Star height={48} width={48} color={star >= 2 ? '#F2DA5E' : colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStar(3)}>
            <Star height={48} width={48} color={star >= 3 ? '#F2DA5E' : colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStar(4)}>
            <Star height={48} width={48} color={star >= 4 ? '#F2DA5E' : colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStar(5)}>
            <Star height={48} width={48} color={star >= 5 ? '#F2DA5E' : colors.primary} />
            </TouchableOpacity>
        </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            marginBottom: 20,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: 'row',
        },
    });

export default ChooseStar;
