import {
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    Pressable,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function ChangeAvatar(
    {
        changeAvatar,
    } : {
        changeAvatar: React.Dispatch<React.SetStateAction<{uri :string, mimeType: string} | undefined>>,
    }
) {
    const colors = useAppSelector((state) => state.darkMode.color);
    const user = useAppSelector((state) => state.user.data);
    const ChangeAvatar = async () => {
        await launchImageLibrary({ mediaType: 'photo' }, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.errorMessage) {
                console.error('ImagePicker Error: ', response.errorMessage);
              } else {
                const assets = response.assets;
                if (assets && assets.length > 0) {
                  const image = assets[0];
                  if(image.uri && image.type )
                  changeAvatar({uri: image.uri, mimeType: image.type})
                }
              }
        } )
    }
    if (user)
        return (
            <View
                style={{
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}
            >
                {user.avatar ?
                    <Image
                        style={{
                            height: height * 0.25,
                            width: height * 0.25,
                            borderRadius: 120,
                            marginBottom: 10,
                        }}
                        source={{ uri: user.avatar }} />
                    :
                    <Image
                        style={{
                            height: height * 0.25,
                            width: height * 0.25,
                            borderRadius: 120,
                            marginBottom: 10,
                        }}
                        source={require('../../../image/avatar.png')} />
                }
                <Pressable
                    style={{
                        margin: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={ChangeAvatar}
                >
                    <Text style={{
                        marginTop: 20,
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 20,
                        color: colors.textPrimary,
                    }}>
                        Change profile picture
                    </Text>
                </Pressable>
            </View>
        );
}
