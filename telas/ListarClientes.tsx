import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import Api from '../components/Api';

import Cliente from '../components/Cliente';

export default function ListarClientes() {

    const [dados, setDados] = useState<any>([]);

    


    async function buscaClientes(){
     const resposta = await Api.get('clientes');
     setDados(resposta.data);
        
    }

    useEffect(() => {
        buscaClientes();
    }, []);

  return (
    <View style={styles.container}>
       
        <TouchableOpacity style={styles.button}>  
          <Text style={styles.legenda}>Cadastrar Novo Cliente</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Lista de Clientes</Text>

        
        
        <FlatList
            
            data={dados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Cliente id={item.id} nome={item.nome} cpf={item.cpf} saldo={item.saldo}/>}
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