import {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Api from '../components/Api';
import {useNavigation , useRoute} from '@react-navigation/native';
import React from 'react';

type RootStackParamList = {
    TelaCad: undefined;
    ListarClientes: undefined;
    
};

export default function TelaEditar() {

    type UsuarioType ={id: number; nome: string; login: string};
    const route = useRoute();
    const {usuario} = route.params as {usuario: UsuarioType};
    console.log(usuario);   
    
    const navigation = useNavigation();

    const [id, setId] = useState(String(usuario.id) ?? '');
    const [nome, setNome] = useState(String(usuario.nome) ?? '');
    const [login, setCpf] = useState(String(usuario.login) ?? '');
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Edição dos Usuarios</Text>
             <TextInput
                style={styles.input}
                placeholder="Id"
                placeholderTextColor="#999"
                value={id}
                editable={false}
                onChangeText={(text) => setId(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#999"
                value={login}
                onChangeText={(text) => setCpf(text)}
            />
            
            <TouchableOpacity style={styles.button} onPress={async () => {
                try {
                    const resp = await Api.put('usuarios', {
                        id: id,
                        nome: nome,
                        login: login,
                       
                    });
                    alert('salvado com sucesso');
                    navigation.navigate('ListaUsuario' as never);
                } catch {
                    alert('Deu B.O!!! "alt+ F4" resolve ;D');
                }
            }}>
                <Text style={styles.legenda}>Salvar alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('ListaUsuario' as never)}>
                <Text style={styles.legenda}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140f17ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,   
        color: '#ffffffff',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1e1a22ff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#ffffffff',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#00fc7eff',
    },
    button: {
        backgroundColor: '#00ff80ff',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,

        shadowColor: '#00ff26ff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5, 
    },
    legenda: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
});