import 'react-native-gesture-handler'

const { useState } = require("react")

import React from 'react';
import {AuthProvider} from './contexts/auth'

import Routes from './routes/routes';


export default function App() {
  
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  );
}
