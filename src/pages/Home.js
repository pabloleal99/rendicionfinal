import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title:'Home',
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
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text> Rendicion de Gastos  </Text>
                <Button
                   title='pagina detalles' onPress = {()=>{
                       this.props.navigation.navigate('Details')
                   }}
                />   
                <Button
                   title ='Ingresar Rendicion' onPress= {()=>{
                       this.props.navigation.navigate('Rendicion')
                   }}
                />
                <Button
                    title='Ingresar a su cuenta de Usuario' onPress={()=>{
                        this.props.navigation.navigate('Login')
                    }}
                />
            </View>

        );
    }
}