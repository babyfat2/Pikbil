import {
    Dimensions,
    View,
} from "react-native";
import React, { useEffect } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import Animated, { cancelAnimation, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function CarBoxAllSkeleton() {
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
                    marginRight: 20,
                    flexDirection: 'column',
                    marginBottom: 25, 
                },
                animatedStyle,
            ]}
        >
                <View
                    style={{
                        height: height * 0.2,
                        width: width * 0.9,
                        borderRadius: 10,
                        marginBottom: 10,
                        backgroundColor: colors.secondary,
                    }}
                />
                <View style={{
                    backgroundColor: colors.secondary,
                    height: 20,
                    width: width * 0.4,
                    borderRadius: 20,
                    marginBottom: 5,
                }} />
                <View
                    style={{
                        backgroundColor: colors.secondary,
                        height: 20,
                        width: width * 0.3,
                        borderRadius: 20,
                        marginBottom: 5,
                    }}
                />
        </Animated.View>
    );
}
