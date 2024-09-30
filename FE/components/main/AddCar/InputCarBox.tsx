import {
    View,
    TextInput,
    TextInputProps,
    Text,
    Dimensions,
  } from "react-native";
  import React from "react";
  import { useAppSelector } from "redux/hooks.ts/hooks";
  
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  export default function InputCarBox({
    props,
    name,
  }: {
    props: TextInputProps,
    name: string,
  }) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    return (
      <View
      style={{
        marginBottom: 20,
      }}
      >
        <Text style={{ 
          fontFamily: 'Montserrat-Bold', 
          fontSize: 18, 
          color: colors.textPrimary,
          marginBottom: 10,
        }}
        >
          {name}
        </Text>
        <TextInput
          style={{
              borderColor: colors.secondary,
              borderRadius: 10,
              borderWidth: 2,
              width: "100%",
              fontSize: 16,
              fontFamily: "jakara",
              includeFontPadding: false,
              paddingTop: 10,
              paddingLeft: 15,
              paddingBottom: 10,
              paddingRight: 20,
            }}
          { ...props }
        />
      </View>
    );
  }
  