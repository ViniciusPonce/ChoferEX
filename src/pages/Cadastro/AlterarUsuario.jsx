import React from 'react'
import { View, Image, TextInput, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native'

const fundo = '../assets/Retangulo_4.jpg'
const Usuario = '../assets/Usuario.png'
export default () => {
    {/*const [logo] = useState(new Animated.ValueXY({}))*/}
 
    return (
        <ImageBackground source={require(fundo)} style={styles.backgroundImage}>
            <View style={styles.usuario}>
                <Image source={require(Usuario)} style={styles.usuario} ></Image>
            </View>
            <View style={styles.container}>
                <Text style = {styles.nmUsuario}>Talys Eugênio </Text>
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
               
                <TouchableOpacity style = {styles.btnSubmit}>
                    <Text style = {styles.submitText}>DELETAR CONTA</Text>
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
    usuario: {
        top: 50,
        width: 170,
        height: 150,
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
    nmUsuario: {
        width: "90%",
        height: 100,
        fontSize: 30,
        color: "#210934",
        padding: 14,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign:'center',
        fontWeight:'bold'
    },
    btnSubmit: {
        backgroundColor: "#210934",
        width: 170,
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