import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import TableChoose from "components/main/Trip/TableChoose";
import TripBox from "components/main/Trip/TripBox";
import { useGetMyTripQuery } from "redux/api/action";
import TripBoxSkeleton from "components/main/Trip/TripBoxSkeleton";
import { useAppSelector } from "redux/hooks.ts/hooks";
import CancelBooking from "components/main/Trip/CancelBooking";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Trip() {
    const { colors, styles } = useStyles(createStyles);
    const [status, setStatus] = useState<string>("All");
    const trips = useGetMyTripQuery(null);
    const reloadTrip = useAppSelector((status) => status.trip.reloading );
    useEffect(() => {
        if (reloadTrip) {
          // Khi reloadTrip = true, gọi lại API trips
          trips.refetch();
        }
      }, [reloadTrip]);
    return (
        <View style={styles.container}>
            <Text style={styles.textMyTrip}>My Trip</Text>
            <TableChoose status={status} setStatus={setStatus} />
            {trips.isLoading ? (
                <>
                    <TripBoxSkeleton />
                    <TripBoxSkeleton />
                    <TripBoxSkeleton />
                </>
            ) : (
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={trips.currentData}
                    renderItem={(item) => (
                        ((item.item.status === status || status === "All") ? (
                            <TripBox tripInfor={item.item} />) : (
                            <></>
                        )))
                    }
                />
            )}
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
        textMyTrip: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginTop: 20,
            color: colors.textPrimary,
        },
    });
export default Trip;