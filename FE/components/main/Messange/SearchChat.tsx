import {
    Dimensions,
    TextInput,
    View,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { Search } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function SearchChat() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [number, onChangeNumber] = React.useState('');
    return (
        <View
        style={{
            marginBottom: 20,
            marginTop: 20,
            justifyContent: 'center',
        }}>
            <TextInput
                cursorColor={colors.primary}
                placeholder="Search for message here"
                onChangeText={onChangeNumber}
                value={number}
                placeholderTextColor={colors.textPrimary}
                style={{
                    height: 50,
                    width: "100%",
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    borderRadius: 5,
                    paddingTop: 10,
                    paddingLeft: 40,
                    paddingBottom: 10,
                    fontSize: 18,
                    fontWeight: '300',
                }}
            />
            <Search height={24} width={24} style={{position: 'absolute', left: 10,}} color={colors.primary} />
        </View>
    );
}

