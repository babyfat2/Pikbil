import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IUserData } from "types/api";
import { HomeProp } from "types/navigation";
const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const HostDetail = ({ owner }: { owner: IUserData }) => {
    const navigation = useNavigation<HomeProp>();
    const colors = useAppSelector((state) => state.darkMode.color);
    return (
        <View style={{
            padding: width * 0.05,
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                color: colors.textPrimary,
                marginBottom: 15,
            }}>
                HOST DETAIL
            </Text>
            <View
                style={{ flexDirection: 'row',  }}
            >
                {!owner.avatar ?
                    <Image style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 0.5, borderColor: colors.primary}} source={require('../../../assets/avatar.png')} />
                    :
                    <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={{ uri: owner.avatar }} />
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
                <TouchableOpacity style={{
                    position: 'absolute',
                    right: 0,
                    backgroundColor: colors.primary,
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 20,
                }}
                onPress={() => navigation.navigate("ContactOwner", {owner: owner})}
                >
                    <Text style={{
                        fontFamily: 'Montserrat-Bold', 
                        color: "#FFF",
                        fontSize: 14,
                    }}
                    >Contact
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default HostDetail;
