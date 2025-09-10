// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import ListarClientes from './telas/ListarClientes';

const RootStack = createNativeStackNavigator({

  screenOptions: {
    headerStyle: { 
      backgroundColor: '#6903a3ff' 
    },
    headerTintColor: '#fff', 
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Início', 
        
        
      },
    },  
    ListarClientes: {
      screen: ListarClientes,
      options: {
        title: 'Clientes',
        
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}