import React, {Component} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {View, Button} from 'react-native';

class BiometricsPage extends Component{

    constructor(props){
        super(props);
        this.biometrics = this.biometrics.bind(this);
    }

    async biometrics(){
        // const { biometryType } = await ReactNativeBiometrics.isSensorAvailable();
        
        // if(biometryType){
        //     alert(biometryType+' is your device biometric type');
        // }

        //isSensorAvailable() 

        // ReactNativeBiometrics.isSensorAvailable()
        // .then((resultObject) => {
        //     const { available, biometryType } = resultObject
        
        //     if (available && biometryType === ReactNativeBiometrics.TouchID) {
        //     console.log('TouchID is supported')
        //     } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        //     console.log('FaceID is supported')
        //     } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
        //     console.log('Biometrics is supported')
        //     } else {
        //     console.log('Biometrics not supported')
        //     }
        // })

        // createKeys()

        // ReactNativeBiometrics.createKeys('sfdsfsfsdf')
        //     .then((resultObject) => {
        //         const { publicKey } = resultObject
        //         alert(publicKey)
        //         sendPublicKeyToServer(publicKey)
        //     })

        //biometricKeysExist()

        // ReactNativeBiometrics.biometricKeysExist()
        //     .then((resultObject) => {
        //         const { keysExist } = resultObject
            
        //         if (keysExist) {
        //         alert(keysExist+' Keys exist')
        //         } else {
        //         alert(keysExist+' Keys do not exist or were deleted')
        //         }
        //     })

        //deleteKeys()

        ReactNativeBiometrics.deleteKeys()
            .then((resultObject) => {
                const { keysDeleted } = resultObject
            
                if (keysDeleted) {
                alert(keysDeleted+' Successful deletion')
                } else {
                alert(keysDeleted+' Unsuccessful deletion because there were no keys to delete')
                }
            })


    }

    render(){
        return <Button title={'hello biometrics'} onPress={() => this.biometrics()} />
    }

}

export default BiometricsPage;