import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { Button } from 'react-native-paper';
import { Container, Form } from './styles';
import Background from '~/components/Background';
import Input from '~/components/Input';

import { recuperarSenhaRequest } from '~/store/modules/auth/actions';

export default function EsqueciSenha({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (email) {
      dispatch(recuperarSenhaRequest(email));
    } else {
      Alert.alert('Aviso', 'Email é obrigatório');
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <Input
            label="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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
            Recuperar minha senha
          </Button>
        </Form>
      </Container>
    </Background>
  );
}

EsqueciSenha.navigationOptions = ({ navigation }) => ({
  title: 'SAD',
});
