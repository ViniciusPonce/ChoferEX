import React from 'react'
import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'

const fundo = '../assets/Retangulo_4.jpg'
const logo = '../assets/Logo.png'
export default () =>{
    return(
        <ImageBackground source={require(fundo)} style={styles.backgroundImage}>
            <View >
                <Image source={require(logo)} style={styles.logo} ></Image>
            </View>
            <View style={styles.container}>
            <Text style = {styles.cadastrar}>Posui observação EAR em sua CNH?</Text>
            <Text style = {styles.cadastrar2}>(Exerce Atividade Remunerada)</Text>
                <TouchableOpacity style = {styles.btnSubmit}>
                    <Text style = {styles.submitText}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnSubmit}>
                    <Text style = {styles.submitText}>Não</Text>
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
    cadastrar2 : {
        width: "90%",
        height: 90,
        fontSize: 20,
        color: "#210934",
        padding: 14,
        justifyContent: "center",
        alignItems: 'center',
        textAlign:'center',
    },
  });