import React, { useEffect } from "react";
import { View, Text, Dimensions, Image,} from "react-native";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function PriceDetail({
    priceCar,
    priceProtection,
    setPriceTotal,
    dateRent,
}: {
    priceCar: number,
    priceProtection: number,
    setPriceTotal: React.Dispatch<React.SetStateAction<number>>,
    dateRent: Date,
}) {
    const colors = useAppSelector((state) => state.darkMode.color);
    const datenow = new Date();
    const timeDifference = Math.abs(dateRent.getTime() - datenow.getTime());
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    const dayDifference = Math.ceil(timeDifference / millisecondsInOneDay);
    const VAT = (priceCar + priceProtection) * dayDifference / 10;
    const TotalPrice = (priceCar + priceProtection)  * dayDifference * 11/10;
    useEffect(()=> {
        setPriceTotal(TotalPrice);
    })
    const RenderPrice = ({name, name2}:{name: string, name2: number | undefined}) =>  {
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
                    color: colors.textSecondary,
                }}
                >$ {name2}</Text>
            </View>
        )
    }
    return (
        <View>
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginTop: 20,
                marginBottom: 5,
            }}>
                PRICE DETAILS
            </Text>
            <RenderPrice name="Trip price" name2 ={priceCar * dayDifference} />
            {priceProtection > 0 && <RenderPrice name="Protection" name2={priceProtection * dayDifference}/>}
            <RenderPrice name="VAT" name2 ={VAT} />
            <View style={{
                height: 20, 
                marginTop: 15,
            }}>
                <Text style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: 16,
                    color: colors.textPrimary,
                }}
                >Total
                </Text>
                <Text style={{
                    position:'absolute',
                    right: 0,
                    fontFamily: "Montserrat-Bold",
                    fontSize: 16,
                    color: colors.textPrimary,
                }}
                >$ {TotalPrice}</Text>
            </View>
        </View>
    );
};
