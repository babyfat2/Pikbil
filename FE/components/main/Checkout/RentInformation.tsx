import React from "react";
import { View, Text, Dimensions, Image,} from "react-native";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function RentInformation() {
    const colors = useAppSelector((state) => state.darkMode.color);
    const user = useAppSelector((state) => state.user.data);
    const RenderInfor = ({name, name2}:{name: string, name2: string | number}) =>  {
        return (
            <View style={{
                height: 20, 
                marginTop: 5,
            }}>
                <Text style={{
                    fontFamily: "Montserrat-Light",
                    fontSize: 16,
                    color: colors.textSecondary,
                }}
                >{name}
                </Text>
                <Text style={{
                    position:'absolute',
                    right: 0,
                    fontFamily: "Montserrat-Bold",
                    fontSize: 16,
                    color: colors.textPrimary,
                }}
                >{name2}</Text>
            </View>
        )
    }
    if(user)
    return (
        <View>
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 5,
            }}>
                RENTER INFORMATION
            </Text>
            <RenderInfor name="Fullname" name2={user?.fullname}/>
            <RenderInfor name="Email address" name2={user?.email}/>
        </View>
    );
};
