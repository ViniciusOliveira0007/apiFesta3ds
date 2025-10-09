import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

interface propUsuario{
    id: number;
    nome: string;
    login: string;
    onDelete?: () => void;
    onEditar?: () => void;
}


export default function Cliente({id, nome, login, onDelete, onEditar}: propUsuario) {
  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
            <Text style={styles.subtitulo}>Cod: {id}</Text>
            <Text style={styles.subtitulo}>Nome: {nome}</Text>
            <Text style={styles.subtitulo}>Login: {login}</Text>
            
        </View>

        <View style={styles.botoes}>
            <TouchableOpacity style={styles.buttonred} onPress={onDelete}>
                <Text style={styles.legenda}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onEditar}>
                <Text style={styles.legenda}>Editar</Text>
            </TouchableOpacity>
        </View>

       




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffffff',
},
legenda: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  bloco: {
    borderColor: '#00fc7eff',
    borderWidth: 3,
    padding: 20,
    borderRadius: 30,
    boxShadow: '10px 10px 5px #8000ffff',
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
    button: {
    backgroundColor: '#00ff80ff',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    
    width: 150,
  },
  buttonred: {
    backgroundColor: '#ff0000ff',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    
    width: 150,
  },
})