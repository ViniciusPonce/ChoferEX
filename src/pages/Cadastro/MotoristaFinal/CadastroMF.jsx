import React from 'react'
import { View, Image, TextInput, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'

const fundo = '../../assets/Retangulo_4.jpg'
const logo = '../../assets/Logo.png'
export default () =>{
    return(
        <ImageBackground source={require(fundo)} style={styles.backgroundImage}>
            <View >
                <Image source={require(logo)} style={styles.logo} ></Image>
            </View>
            <View style={styles.container}>
            <Text style = {styles.cadastrar}>CADASTRO MOTORISTA FINAL</Text>
            <TextInput 
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "CPF"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput 
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Número CNH"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TextInput 
                style = {styles.input}
                placeholder placeholderTextColor = "#700CBC"
                placeholder = "Vencimento CNH"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TouchableOpacity style = {styles.btnSubmit}>
                    <Text style = {styles.submitText}>CONFIRMAR</Text>
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
        top: 50,
        width: 304,
        height: 135,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: "#FFF",
        width: "80%",
        marginBottom: 40,
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
    cadastrar: {
        width: "90%",
        height: 90,
        fontSize: 25,
        color: "#210934",
        padding: 14,
        justifyContent: "center",
        alignItems: 'center',
        textAlign:'center',
        fontWeight:'bold'
    },
        cadastrar: {
        width: "90%",
        height: 90,
        fontSize: 25,
        color: "#210934",
        padding: 14,
        justifyContent: "center",
        alignItems: 'center',
        textAlign:'center',
        fontWeight:'bold'
    },
  });