import {View, FlatList, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useState, useEffect} from 'react';

import Usuario from '../components/Usuario';

import Api from '../components/Api';

import { useNavigation } from '@react-navigation/native';



import React from 'react';

type ClienteType = { id: number; nome: string; cpf: string; saldo: number };

export default function ListarUsuarios() {

    const navigation = useNavigation();

    const [usuario, setUsuarios] = useState<any>([]);

    


    async function buscaUsuarios(){
     const resposta = await Api.get('usuarios');
     setUsuarios(resposta.data);
     
        
    }

    useEffect(() => {
        buscaUsuarios();
    }, []);
    

    async function  excluir(id:number) {
      try {
               const r = await Api.delete(`clientes/${id}`);

                Alert.alert(
                "Excluir",`${JSON.stringify(r.data)}`
                );

                await buscaUsuarios();
            } catch (e: any) {
                Alert.alert("Erro ao excluir", e?.message ?? "Erro desconhecido");
            }
    }


    function editar(item: ClienteType) {
               navigation.navigate('TelaEditarUser' as never, {usuario : item} as never);
      } 
    




    

  

  return (
    <View style={styles.container}>
       
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('TelaUsuario' as never)}
        >  
          <Text style={styles.legenda}
          >Cadastrar Novo Usuário</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Lista de Usuários</Text>

        
        
        <FlatList
            
            


            data={usuario}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({item})=><Usuario nome={item.nome} login={item.login}  
                id={item.id} onDelete={()=>excluir(item.id)} onEditar={()=>editar(item)}/>}
                
            />




          
        


        
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
  
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffffff',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00ff80ff',
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    boxShadow: '0px 0px 10px #00ff26ff',
   
  },
  
  legenda: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  



});