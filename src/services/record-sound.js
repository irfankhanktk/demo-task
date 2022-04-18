import RNFS from 'react-native-fs';
import SoundRecorder from 'react-native-sound-recorder';
import React from 'react';
import {PermissionsAndroid} from 'react-native'
// Note: You may need to request runtime permission(s) first.
export const startRecording = async () => {
    SoundRecorder.start(RNFS.ExternalDirectoryPath + '/test.mp3')
        .then(function () {
            console.log('started recording');
        });
}
export const stopRecording = async () => {
    const res = await SoundRecorder.stop();
    console.log('stopped recording, audio file saved at: ', res);
    return res.path;
}
export const requestAudioPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: "iMate App Audio Permission",
                message:
                    "iMate App needs access to your Audio ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Audio");
            return true;
        } else {
            console.log("Audio permission denied");
            return false;
        }
    } catch (err) {
        console.warn(err);
    }
};