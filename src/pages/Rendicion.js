import React, {Component} from 'react';
import {View, Text, Button,Alert,TextInput} from 'react-native';

export default class Rendicion extends Component{
    static navigationOptions = {
        title:'Rendicion',
        headerStyle:{
            backgroundColor:'#1565c0'
        },
        headerTintColor:'#fff',
        headerTitletStyle:{
            fontWeight:'bold',
        },

    };


    render (){
        return(
            <View style={{padding:40}}>
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Id'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Nombre'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Monto'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Glosa'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Restriccion'
          />
        <Button
          title="Guardar"
          color="red"
          onPress={() => Alert.alert('Se ha guardado con exito!')}
        />
        <Button
          title="Cancelar"
          color="purple"
          onPress={() => Alert.alert('Se ha Cancelado con exito!')}
        /> 
        <Button
          title="Actualizar"
          color="yellow"
          onPress={() => Alert.alert('Se ha Cancelado con exito!')}
        /> 
        <Button
          title="Borrar"
          color="Black"
          onPress={() => Alert.alert('Se ha Cancelado con exito!')}
        /> 
        <Button
                   title='volver a Home' onPress = {()=>{
                       this.props.navigation.goBack();
                   }}
        />    
        </View>
        );
    }
}