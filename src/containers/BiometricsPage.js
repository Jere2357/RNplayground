import React, {Component} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {View, Button} from 'react-native';

class BiometricsPage extends Component{

    constructor(props){
        super(props);
    }

    async isSensorAvailable(){
        //isSensorAvailable() 

        ReactNativeBiometrics.isSensorAvailable()
        .then((resultObject) => {
            const { available, biometryType } = resultObject
        
            if (available && biometryType === ReactNativeBiometrics.TouchID) {
            alert('TouchID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
            alert('FaceID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
            alert('Biometrics is supported')
            } else {
            alert('Biometrics not supported')
            }
        })
    }

    async createKeys() {
        // createKeys()

        ReactNativeBiometrics.createKeys('Confirm fingerprint')
            .then((resultObject) => {
                const { publicKey } = resultObject
                alert(publicKey)
                // sendPublicKeyToServer(publicKey)
            })
    }

    async biometricKeysExists(){
        //biometricKeysExist()

        ReactNativeBiometrics.biometricKeysExist()
            .then((resultObject) => {
                const { keysExist } = resultObject
            
                if (keysExist) {
                alert(keysExist+' Keys exist')
                } else {
                alert(keysExist+' Keys do not exist or were deleted')
                }
            })
    }

    async deleteKeys(){
        // //deleteKeys()

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

    async createSignature(){
        let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
        let payload = epochTimeSeconds + 'Current Date for Creating finger print'

        ReactNativeBiometrics.createSignature({
                promptMessage: 'Sign in',
                payload: payload
            })
            .then((resultObject) => {
                const { success, signature } = resultObject
            
                if (success) {
                alert(signature)
                // verifySignatureWithServer(signature, payload)
                }
            })
            .catch(() => alert('Failed creating signature key'))
    
    }

    async simplePrompt(){
        //simplePrompt()

        ReactNativeBiometrics.simplePrompt({
            promptMessage: 'Sign in'
        })
            .then((resultObject) => {
                const { success } = resultObject
            
                if (success) {
                alert('successful biometrics provided')
                } else {
                alert('user cancelled biometric prompt')
                }
            })
            .catch(() => {
                alert('biometrics prompt failed')
            })
    }

    render(){
        return(
            <View>
                <Button title={'What sensor available'} onPress={() => this.isSensorAvailable()} />
                <Button title={'create API key'} onPress={() => this.createKeys()} />
                <Button title={'API key exist ?'} onPress={() => this.biometricKeysExists()} />
                <Button title={'delete API key'} onPress={() => this.deleteKeys()} />
                <Button title={'create signature key'} onPress={() => this.createSignature()} />
                <Button title={'simple prompt of biometrics'} onPress={() => this.simplePrompt()} />
            </View>
        ); 
    }

}

export default BiometricsPage;