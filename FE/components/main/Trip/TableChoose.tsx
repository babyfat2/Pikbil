import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import useStyles from "style/useStyles";
import { IColor } from "style/color";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function TableChoose({
    status,
    setStatus,
}:{
    status: string,
    setStatus: React.Dispatch<React.SetStateAction<string>>,
}) {
    const { colors, styles } = useStyles(createStyles);
    const [chooseAll, setChooseAll] = useState<Boolean>(true);
    const [chooseOngoing, setChooseOngoing] = useState<Boolean>(false);
    const [chooseCompleted, setChooseCompleted] = useState<Boolean>(false);
    const [chooseCancelled, setChooseCancelled] = useState<Boolean>(false);
    const buttonAll = () => {
        setStatus("All");
        setChooseAll(true);
        setChooseOngoing(false);
        setChooseCompleted(false);
        setChooseCancelled(false);
    };
    const buttonOngoing = () => {
        setStatus("Ongoing");
        setChooseAll(false);
        setChooseOngoing(true);
        setChooseCompleted(false);
        setChooseCancelled(false);
    };
    const buttonCompleted = () => {
        setStatus("Completed");
        setChooseAll(false);
        setChooseOngoing(false);
        setChooseCompleted(true);
        setChooseCancelled(false);
    };
    const buttonCancelled = () => {
        setStatus("Cancelled");
        setChooseAll(false);
        setChooseOngoing(false);
        setChooseCompleted(false);
        setChooseCancelled(true);
    };
    return (
        <View style={styles.container}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            >
            <TouchableOpacity
                style={chooseAll ? styles.boxChooseTrue : styles.boxChoose}
                onPress={buttonAll}
            >
                <Text style={chooseAll ? styles.textChooseTrue : styles.textChoose}>
                    All
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={chooseOngoing ? styles.boxChooseTrue : styles.boxChoose}
                onPress={buttonOngoing}
            >
                <Text style={chooseOngoing ? styles.textChooseTrue : styles.textChoose}>
                    Ongoing
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={chooseCompleted ? styles.boxChooseTrue : styles.boxChoose}
                onPress={buttonCompleted}
            >
                <Text style={chooseCompleted ? styles.textChooseTrue : styles.textChoose}>
                    Completed
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={chooseCancelled ? styles.boxChooseTrue : styles.boxChoose}
                onPress={buttonCancelled}
            >
                <Text style={chooseCancelled ? styles.textChooseTrue : styles.textChoose}>
                    Cancelled
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            marginTop: 20,
            marginBottom: 30,
            height: height * 0.05,
            alignItems: "flex-end",
            flexDirection: 'row',
        },
        boxChoose: {
            marginRight: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: colors.primary,
        },
        boxChooseTrue: {
            marginRight: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: colors.primary,
            backgroundColor: colors.secondary,
        },
        textChoose: {
            color: colors.textPrimary,
            fontFamily: "Montserrat-Bold",
            fontSize: 14,
        },
        textChooseTrue: {
            color: "#FFF",
            fontFamily: "Montserrat-Bold",
            fontSize: 14,
        }
    });

export default TableChoose;
