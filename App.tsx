import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [fecha, setfecha] = useState('2022-07-29');
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [concepto, setconcepto] = useState('');
  const [codigo, setcodigo] = useState('');
  const [cuenta, setcuenta] = useState('');
  const [debit, setdebit] = useState('');
  const [credito, setcredito] = useState('');
  

  const saveDate = (text: string) => {
    if (text.length >= 10 && text !== "2022-07-29" ) {
      alert("Erorr");
      return;

      
    }

    if (text.length >= 10){
      setfecha(text);
      console.log(fecha)
    }

  };

  const saveName = (text: string) => {
    setnombre(text);
    console.log(nombre);
  };

  const saveApellido= (text: string) => {
    setapellido(text);
    console.log(apellido);
  };

  const saveconcepto= (text: string) => {
    setconcepto(text);
    console.log(concepto);
  };

  const savecodigo= (text: string) => {
    setcodigo(text);
    console.log(codigo);
  };

  const savecuenta= (text: string) => {
    setcuenta(text);
    console.log(cuenta);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const savedebito= (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  const savecredito= (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  
  const saveJournal = () => {
    alert("hola");
  };

  return (
    <View>
    <Text>APP Journals</Text>
      <Text>fecha</Text>
      <TextInput placeholder="fecha"
      onChangeText={(text) => saveDate(text)}/>

      <Text>nombre</Text>
      <TextInput placeholder="nombre"
      onChangeText={(text) => saveName(text)} />


      <Text>apellido</Text>
      <TextInput placeholder="apellido"
        onChangeText={(text) => saveApellido(text)}/>

      <Text>concepto</Text>
      <TextInput placeholder="concepto"
        onChangeText={(text) => saveconcepto(text)}/>

    <View>
      <Text>codigo:</Text>
      <TextInput placeholder="codigo"
      onChangeText={(text) => savecodigo(text)}/>

      <Text>cuenta:</Text>
      <TextInput placeholder="cuenta"
      onChangeText={(text) => savecuenta(text)}/>

      <Text>debito:</Text>
      <TextInput placeholder="debito"
      onChangeText={(text) => savedebito(text)}/>

      <Text>credito</Text>
      <TextInput placeholder="credito"
      onChangeText={(text) => savecredito(text)}/>

      <Button title="guardar" onPress={
        () => saveJournal()}/> 

      </View>
    </View>
  );
  }

  







//const {name, lastName} = person;
//console.log(name);
//console.log(lastName);

//const createPersonObject = () => ({
 // name:'Ana',
  //lastName: 'Ruiz',
 // age: 23,
  //address: 'Zona 2'
//})

//const { name, lastName} = createPersonObject





//let person2 = {...person};
//person2.name = 'Pedro';




  //console.log('person', person);

  //const student = {...person};

  //console.log('student', student)








//const nuemeros: number[] = [1, 2, 3];

//const frutas: string[] =['pera', 'mango', 'uva'];

//const mescla: (Number | String) [] = [...nuemeros, ...frutas ];

//console.log(mescla);










  //const sumar = (...numeros: number []) =>{
 // return numeros.reduce((acumulado, elemento)=> acumulado + elemento, 0)
//}

//console.log (sumar(1, 2, 3 ));





