import { StatusBar } from "expo-status-bar";
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;

export function AnimatedSplashScreen({ children }: { children: ReactNode }) {
    const [appReady, isAppReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            isAppReady(!appReady)
        }, 4000);
    }, [])

    const translateLogoX = useSharedValue(-width);
    const translateNameApp = useSharedValue(width);

    const animatedStyleLogo = useAnimatedStyle(() => ({
        transform: [{
            translateX: withTiming(translateLogoX.value, {
                duration: 1000,
                easing: Easing.linear,
            })
        }],
    })
    );
    const animatedStyleNameApp = useAnimatedStyle(() => ({
        transform: [{
            translateX: withTiming(translateNameApp.value, {
                duration: 1000,
                easing: Easing.linear,
            })
        }],
    })
    )
    React.useEffect(() => {
        translateLogoX.value =withTiming(0, {duration: 1000,});
        translateNameApp.value =withTiming(0, {duration: 1000,});
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar animated={true} backgroundColor="transparent" />
            {appReady && children}
            {!appReady && (
                <Animated.View
                    pointerEvents="none"
                    style={[
                        {
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FFFF",
                        },
                    ]}
                >
                    <Animated.Image
                        style={[{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        },
                        animatedStyleLogo,
                        ]}
                        source={require('assets/car.png')}
                        fadeDuration={0}
                    />
                    <Animated.Text
                        style={[
                            {
                                fontFamily: 'COOPBL',
                                fontSize: 60,
                                paddingLeft: 60,
                                textAlign: "center",
                                color: "#424F7B",
                            },
                            animatedStyleNameApp,
                        ]}
                    >
                        Pikbil
                    </Animated.Text>
                </Animated.View>
            )}
        </View>
    )
}