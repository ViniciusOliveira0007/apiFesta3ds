import {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Api from '../components/Api';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';

type RootStackParamList = {
    TelaCad: undefined;
    ListarClientes: undefined;
    
};

export default function TelaCad() {
    
    const navigation = useNavigation();

   
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [saldo, setSaldo] = useState('');
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Clientes</Text>
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
                value={cpf}
                onChangeText={(text) => setCpf(text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Saldo"
                placeholderTextColor="#999"
                value={saldo}
                onChangeText={(text) => setSaldo(text)}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={async () => {
                try {
                    const resp = await Api.post('clientes', {
                        nome: nome,
                        cpf: cpf,
                        saldo: saldo,
                    });
                    alert(JSON.stringify(resp.data.massage));
                    navigation.navigate('ListarClientes' as never);
                } catch {
                    alert('Deu B.O!!! "alt+ F4" resolve ;D');
                }
            }}>
                <Text style={styles.legenda}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListarClientes' as never)}>
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