import {
    Dimensions,
    View,
} from "react-native";
import React, { useEffect } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import Animated, { cancelAnimation, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function DiscountBoxSkeleton() {
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
                    width: width * 0.9,
                    height: height * 0.3,
                },
                animatedStyle,
            ]}
        >
            <View
            style={{
                height: height * 0.28,
                width: width * 0.9,
                borderRadius: 20,
                marginBottom: 10,
                backgroundColor: colors.secondary,
            }}
            />
            <View
            style={{
                height: 20,
                width: width * 0.25,
                borderRadius: 20,
                backgroundColor: colors.secondary,
            }}
            /> 
        </Animated.View>
    );
}
