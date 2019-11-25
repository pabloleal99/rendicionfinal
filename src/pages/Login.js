import React ,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { View ,Button,Alert} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title:'Login',
        headerStyle:{
            backgroundColor:'#1565c0'
        },
        headerTintColor:'#fff',
        headerTitletStyle:{
            fontWeight:'bold',
        },

    };

  render() {
    return (
       <View>
        <Container>
       
        <Content>
          <Form>   
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Contraseña</Label>
              <Input />
            </Item>    
          </Form>
        </Content> 
      </Container>
      </View> 

    );
  }
}
