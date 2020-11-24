import React, {useContext, useEffect} from 'react';
import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import bgimage from '../../assets/Login.jpg';

import AuthContext from '../../contexts/auth'



const Login = ({navigation}) => {
    const {signed,user, login} = useContext(AuthContext);
    console.log(signed)
   

    function handleLogin (){
        login()
    }
    
    return (
            <ImageBackground source={bgimage} style={styles.bgimage}>

                <View style={styles.containerindex}>
                    <View style={styles.containerLogo}>
                        <Image source={require('../../assets/ChoferExOficial.png')} style={styles.logo} />
                    </View>
                    <TextInput style={styles.input}
                        placeholder placeholderTextColor="#700CBC"
                        placeholder="Email"
                        autoCorrect={false}
                        onChangeText={() => { }} />
                    <TextInput style={styles.input}
                        placeholder placeholderTextColor="#700CBC"
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCorrect={false}
                        onChangeText={() => { }} />

                    <TouchableOpacity style={styles.btnSubmit} title ="Login" onPress={handleLogin}>
                        <Text style={styles.submitText} onPress={() => {alert('Voce apertou')}}> Entrar </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerRodape} >
                    <Text style={styles.textNovo}> É NOVO AQUI ?</Text>
                    <Text style={styles.textNewAccount} > CRIE SUA CONTA GRATIS </Text>
                </View>
            </ImageBackground>
       

    );
    {/*App.navigationOptions = {
        title: 'Login',
    } */}
}

const styles = StyleSheet.create({
    containerindex: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        top: -110
    },
    containerRodape: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    containerLogo: {
        flex: 1,
        justifyContent: "center"
    },
    bgimage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%"
    },
    logo: {
        justifyContent: "center",
        width: "90%",
        width: 338,
        height: 150,
        top: 80
    },
    input: {
        backgroundColor: "#FFF",
        width: "80%",
        marginBottom: 15,
        borderRadius: 25,
        height: 50,
        fontSize: 20,
        color: "#000000",
        padding: 14,
        opacity: 0.5,



    },
    btnSubmit: {
        backgroundColor: "#210934",
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,



    },
    submitText: {
        color: "#FFF",
        fontSize: 18
    },
    textNovo: {
        flexDirection: "row",
        color: "#210934",
        top: -30

    },
    textNewAccount: {
        flexDirection: "row",
        color: "#D4E0F7",
        fontWeight: "bold",
        top: -30

    }

});
export default Login;
