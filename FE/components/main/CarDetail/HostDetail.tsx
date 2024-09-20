import React from "react";
import { View, Text, Image, Dimensions, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IUserData } from "types/api";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const HostDetail = ({ owner }: { owner: IUserData }) => {
    const navigation = useNavigation();
    const colors = useAppSelector((state) => state.darkMode.color);
    return (
        <View style={{
            padding: width * 0.05,
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                color: colors.textPrimary,
                marginBottom: 10,
            }}>
                Host Detail
            </Text>
            <View
                style={{ flexDirection: 'row', }}
            >
                {!owner.avatar ?
                    <Image style={{ width: 40, height: 40, borderRadius: 2, }} source={require('../../../assets/car.png')} />
                    :
                    <Image style={{ width: 40, height: 40, borderRadius: 2, }} source={{ uri: owner.avatar }} />
                }
                <View
                    style={{
                        flexDirection: 'column',
                        marginLeft: 20,
                    }}
                >
                    <Text style={{
                        fontFamily: 'Montserrat-Bold', 
                        color: colors.textPrimary,
                        fontSize: 14,
                    }}>{owner.fullname}</Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Light', 
                        color: colors.textPrimary,
                        fontSize: 14,
                    }}>{owner.email}</Text>
                </View>
            </View>
        </View>
    );
};


export default HostDetail;
