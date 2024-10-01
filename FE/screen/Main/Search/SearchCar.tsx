import {
    View,
    Dimensions,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useEffect } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import Animated from "react-native-reanimated";
import { SearchCarNavigationProp } from "types/navigation";
import { Left, Search } from "components/icons";
import { useGetAllCarQuery } from "redux/api/service";
import CarBoxAll from "components/main/AllCar/CarBoxAll";
import CarBoxAllSkeleton from "components/main/AllCar/CarBoxAllSkeleton";
import { useDebounce } from "components/main/Search/debounce";
import { useLazySearchForCarQuery } from "redux/api/action";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function SearchCar({ navigation, route }: SearchCarNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const [trigger,result] = useLazySearchForCarQuery();
    const [inforCar, onChangeInforCar] = React.useState('');
    const query = useDebounce(inforCar, 1000);
    useEffect(() => {
        trigger( query);
    }, [query]);
    return (
        <Animated.View
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <View
                    style={{
                        justifyContent: 'center',
                    }}>
                    <TextInput
                        cursorColor={colors.primary}
                        placeholder="Search for car here"
                        onChangeText={onChangeInforCar}
                        value={inforCar}
                        placeholderTextColor={colors.textPrimary}
                        style={styles.textSearch}
                    />
                    <Search height={24} width={24} style={{ position: 'absolute', left: 20, }} color={colors.primary} />
                </View>
            </View>
            {result.isLoading ? (
                <>
                    <CarBoxAllSkeleton />
                    <CarBoxAllSkeleton />
                    <CarBoxAllSkeleton />
                </>
            )
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={result.data}
                    renderItem={(item) => <CarBoxAll car={item.item} />}
                />
            }
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: width / 15,
            backgroundColor: colors.backgroundColor,
        },
        header: {
            marginTop: 25,
            marginBottom: 25,
            height: height * 0.08,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'row',
        },
        buttonBack: {
            height: height * 0.1,
            width: width * 0.08,
            justifyContent: "center",
            alignItems: "center",
        },
        textSearch: {
            marginLeft: 10,
            height: height * 0.08,
            width: width * 0.8,
            borderWidth: 0.5,
            borderColor: colors.primary,
            borderRadius: 5,
            paddingTop: 10,
            paddingLeft: 40,
            paddingBottom: 10,
            fontSize: 18,
            fontWeight: '300',
        },
    });
export default SearchCar;