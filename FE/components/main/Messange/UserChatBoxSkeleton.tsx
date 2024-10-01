import {
    Dimensions,
    View,
    Text,
} from "react-native";
import React, { useEffect } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import Animated, { cancelAnimation, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function UserChatBoxskeleton() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const opacity = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(opacity.value, [0, 1], [1, 0]),
        };
    });

    useEffect(() => {
        opacity.value = withRepeat(withTiming(1, { duration: 1200 }), -1, true);
        return () => {
            cancelAnimation(opacity);
        };
    }, []);

    return (
        <Animated.View
            style={[
                {
                    marginBottom: 10,
                    marginTop: 10,
                    height: height * 0.08,
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                },
                animatedStyle,
            ]}
        >
                <View
                    style={{
                        height: height * 0.075,
                        width: height * 0.075,
                        borderRadius: 40,
                        marginRight: 10,
                        backgroundColor: colors.primary,
                    }}
                    />
                <View>
                    <View
                        style={{
                            flexDirection: 'column',
                            width: width * 13 / 15 - height * 0.08 - 20,
                            justifyContent: 'space-between',
                            marginBottom: 5,
                        }}
                    >
                        <View style={{
                            height: 24,
                            width: width * 0.3,
                            backgroundColor: colors.primary,
                            borderRadius: 10,
                        }}/>
                        <View style={{
                            marginTop: 10,
                            height: 16,
                            width: width * 0.2,
                            backgroundColor: colors.primary,
                            borderRadius: 10,
                        }}/>
                    </View>
                </View>
        </Animated.View>
    );
}
