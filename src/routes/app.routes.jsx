//rotas de quando estiver logado
import React from 'react'
import OndeVamos from '../pages/Ondevamos/index'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator;

const AppRoutes= () => (
    <AppStack.Navigator>
        <AppStack.Screen name="OndeVamos" component={OndeVamos}/>
    </AppStack.Navigator>
);

export default AppRoutes;