import {
    Image,
    Text,
    Dimensions,
    View,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function AvatarBox() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const user = useAppSelector((state) => (state.user.data));
    if (user === null) {

    } else {
        return (
            <View
                style={{
                    height: height * 0.22,
                    backgroundColor: colors.secondary,
                    alignItems: "flex-end",
                    padding: width/15,
                    flexDirection: 'row',
                }}
            >
                {!user.avatar ?
                    (
                        <Image
                            style={{
                                height: height / 12,
                                width: height / 12,
                                borderRadius: 25,
                            }}
                            source={require('../../../assets/avatar.png')} />
                    ) :
                    (
                        <Image
                            style={{
                                height: height / 12,
                                width: height / 12,
                                borderRadius: 15,
                            }} source={{ uri: user.avatar }} />
                    )
                }
                <View
                    style={{
                        marginLeft: 20,
                        width: 0.5 * width,
                        height: height / 12,
                        flexDirection: 'column',

                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: "#FFF"
                    }}>
                        {user.fullname}
                    </Text>
                    <Text style={{

                        fontSize: 20,
                        color: "#FFF"
                    }}>
                        {user.email}
                    </Text>
                </View>
            </View>
        );
    }
}
