import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import * as MediaLibrary from 'expo-media-library';
import { Button } from "../src/Components/Button";

export default function Cam() {
    const [image, setImage] = useState(null);
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    if (!permission) {

        return <View />;
    }
    if (!permission.granted) {

        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const savePicture = async () => {
        if (image) {
            try {
                const asset = await MediaLibrary.createAssetAsync(image);
                alert('Picture saved! 🎉');
                setImage(null);
                console.log('saved successfully');
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (

        <View style={styles.container}>
            {!image ? (

                <CameraView
                    style={styles.camera}
                    ref={cameraRef}
                    facing="front"
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 30,
                        }}
                    >
                        <Button
                            title=""
                            icon=""
                            onPress={() => {
                                setType(
                                    type === CameraType.back ? CameraType.front : CameraType.back
                                );
                            }}
                        />

                    </View>
                </CameraView>
            ) : (
                <Image source={{ uri: image }} style={styles.camera} />
            )}

            <View style={styles.controls}>
                {image ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 50,
                        }}
                    >
                        <Button
                            title="Re-take"
                            onPress={() => setImage(null)}
                            icon="retweet"
                        />
                        <Button title="Save" onPress={savePicture} icon="check" />
                    </View>
                ) : (
                    <Button title="Take a picture" onPress={takePicture} icon="camera" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#000',
        padding: 8,
    },
    controls: {
        flex: 0.5,
    },
    button: {
        height: 40,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#E9730F',
        marginLeft: 10,
    },
    camera: {
        flex: 5,
        borderRadius: 20,
    },
    topControls: {
        flex: 1,
    },
});
