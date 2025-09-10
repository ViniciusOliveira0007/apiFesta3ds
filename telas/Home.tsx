 import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Home() {

  const navigation = useNavigation(); 
  return (
    
    <View style={styles.container}>

      
      <Text style={styles.titulo}>Gerencie sua Festa</Text>

      <StatusBar backgroundColor="#61dafb" />
      <View>

        <TouchableOpacity style={styles.button}
         onPress={()=>navigation.navigate('ListarClientes' as never)}
        >  
          <Text style={styles.legenda}>Clientes</Text>
         

        </TouchableOpacity>  

        <TouchableOpacity style={styles.button}>  
          <Text style={styles.legenda}>Usuário</Text>

        </TouchableOpacity>  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140f17ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00ff80ff',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    boxShadow: '0px 0px 10px #00ff26ff',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: '',
    color: '#ffffffff',
  },
  legenda: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
});
