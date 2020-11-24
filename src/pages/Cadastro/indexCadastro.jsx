import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import Background from '../../assets/Background-ChoferEX.jpg'

export default ({navigation}) => {
    {/*const [logo] = useState(new Animated.ValueXY({}))*/}
    function OndeVamos(){
        navigation.push('OndeVamos')
    }

    return (
        <ImageBackground source={Background} style={styles.backgroundImage}>
            
            <View>
                <Image source={require('../../assets/ChoferExOficial.png')} style={styles.logo} ></Image>
            </View>
            <View style={styles.container}>
                <Text style = {styles.cadastrar}>CADASTRE-SE</Text>
                <TextInput 
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Nome"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Sobrenome"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Email"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput 
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Data de nascimento"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Senha"
                autoCorrect={false}
                secureTextEntry = {true}
                onChangeText={()=>{}}
                />
                <TextInput
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Confirmar senha"
                autoCorrect={false}
                secureTextEntry = {true}  
                onChangeText={()=>{}}
                />
                <TouchableOpacity style = {styles.btnSubmit}>
                    <Text style = {styles.submitText} onPress={OndeVamos}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
        position: 'absolute',
        height: '100%'
    },
    logo: {
        top: 110,
        width: 235,
        height: 105,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        top:50
    },
    input: {
        backgroundColor: "#FFF",
        width: "80%",
        marginBottom: 20,
        borderRadius: 25,
        height: 50,
        fontSize: 20,
        color: "#000000",
        padding: 14,
        opacity: 0.5,

    },
    cadastrar: {
        width: "90%",
        height: 70,
        fontSize: 30,
        color: "#210934",
        padding: 14,
        justifyContent: "center",
        alignItems: 'center',
        textAlign:'center',
        fontWeight:'bold'
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
  });