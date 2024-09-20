import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { ProtectionPlanNavigationProp, } from "types/navigation";
import { IColor } from "style/color";
import { LogBox } from 'react-native';
import { Left, Right } from "components/icons";
import ProtectionPlanBox from "components/main/Checkout/ProtectionPlanBox";
import { useGetAllProtectionPlansQuery } from "redux/api/service";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function ProtectionPlan({ navigation, route }: ProtectionPlanNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const protectionPlans = useGetAllProtectionPlansQuery(null);
    const [price, setPrice] = useState<number>(0);
    const buttonContinue = () => {
        route.params.setPrice(price);
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textProtectPlan}>Protection plans</Text>
            </View>
            <FlatList
                data={protectionPlans.currentData}
                renderItem={(item) => <ProtectionPlanBox price={price} setPrice={setPrice} protection={item.item} />}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity 
            style={styles.buttonChoose}
            onPress={()  => buttonContinue()}
            >
                <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
            padding: width / 15,
        },
        header: {
            marginTop: 25,
            height: height * 0.08,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textProtectPlan: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginLeft: 20,
            color: colors.textPrimary,
        },
        buttonChoose: {
            position: 'absolute',
            left: width * 1/15,
            bottom: height*0.05,
            height: height * 0.07,
            width: width * 13/15,
            backgroundColor: colors.primary,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
        },
        textContinue: {
            color: "#FFF",
            fontFamily: "Montserrat-Bold",
            fontSize: 18,
        }
    });
export default ProtectionPlan;