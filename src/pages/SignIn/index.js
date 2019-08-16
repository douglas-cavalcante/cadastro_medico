import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Text, Alert } from 'react-native';

import { Button } from 'react-native-paper';
import { Container, Form } from './styles';
import Background from '~/components/Background';
import Input from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    if (email && senha) {
      dispatch(signInRequest(email, senha));
    } else {
      Alert.alert('Aviso', 'Email e senha são obrigatórios');
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={{
              alignSelf: 'center',
              backgroundColor: '#CCC',
              marginBottom: 20,
            }}
          >
            Entrar
          </Button>
        </Form>

        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text>NÃO TEM CONTA? CADASTRE-SE</Text>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}

SignIn.navigationOptions = ({ navigation }) => ({
  title: 'SAD',
});
