// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import ListarClientes from './telas/ListarClientes';
import TelaCad from './telas/TelaCad';
import TelaUsuario from './telas/TelaUsuario';
import TelaEditar from './telas/TelaEditar';
import ListaUsuario from './telas/ListaUsuario';
import TelaEditarUser from './telas/TelaEditarUser';

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
        
      },},
      TelaCad: {
      screen: TelaCad,
      options: {
        title: 'Clientes',
        
      },},
      TelaEditar: {
      screen: TelaEditar,
      options: {
        title: 'Clientes',
        
      },},
      TelaUsuario: {
      screen: TelaUsuario,
      options: {
        title: 'Usuários',
        
      },},
      ListaUsuario: {
      screen: ListaUsuario,
      options: {
        title: 'Usuários',
        
      },},
      TelaEditarUser: {
      screen: TelaEditarUser,
      options: {
        title: 'Usuários',
        
      },},
      




  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}