import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../pages/Login/index'
import Cadastro from '../pages/Cadastro/indexCadastro';
import OndeVamos from '../pages/Ondevamos/index'
import { NavigationContainer } from '@react-navigation/native';


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="OndeVamos" component={OndeVamos}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
