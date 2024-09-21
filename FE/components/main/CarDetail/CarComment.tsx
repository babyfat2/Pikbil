import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable, Touchable, TouchableOpacity } from "react-native";
import { IComment } from "types/api";
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { Star } from "components/icons";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const CarComment = ({ comment }: { comment: IComment | undefined }) => {
    const { colors, styles } = useStyles(createStyles);
    if (comment) {
        const date = new Date(comment.createdAt).toLocaleString().slice(0, 9);
        return (
            <View style={styles.container}>
                <View style={styles.containerAvatar}>
                    {!comment.user.avatar ?
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 0.5, borderColor: colors.primary, }}
                            source={require('../../../assets/avatar.png')}
                        />
                        :
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20, }}
                            source={{ uri: comment?.user.avatar }}
                        />
                    }
                </View>
                <View style={styles.containerLeft}>
                    <Text style={styles.textName}>
                        {comment.user.fullname}
                    </Text>
                    <View style={styles.viewStar}>
                        <Star height={24} width={24} color={comment.star >= 1 ? '#F2DA5E' : colors.primary} />
                        <Star height={24} width={24} color={comment.star >= 2 ? '#F2DA5E' : colors.primary} />
                        <Star height={24} width={24} color={comment.star >= 3 ? '#F2DA5E' : colors.primary} />
                        <Star height={24} width={24} color={comment.star >= 4 ? '#F2DA5E' : colors.primary} />
                        <Star height={24} width={24} color={comment.star >= 5 ? '#F2DA5E' : colors.primary} />
                    </View>
                    <Text style={styles.dateComment}>{date}</Text>
                    <Text style={styles.textDescription}> 
                        {comment.description}
                    </Text>
                </View>
            </View>
        );
    }
};

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
        containerLeft: {
            width: width * 0.8,
            flexDirection: 'column',
            paddingLeft: 10,
        },
        textName: {
            fontFamily: 'Montserrat-Bold',
            color: colors.textPrimary,
            fontSize: 14,
        },
        viewStar: {
            flexDirection: "row",
            marginBottom: 10,
        },
        textDescription: {
            fontFamily: 'Montserrat-Bold',
            color: colors.textSecondary,
            fontSize: 14,
        },
        dateComment: {
            position: 'absolute',
            right: 0,
            fontFamily: 'Montserrat-Bold',
            color: colors.textPrimary,
            fontSize: 14,
        }
    });

export default CarComment;
