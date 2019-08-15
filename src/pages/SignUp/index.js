import React, { useState } from 'react';
import { TouchableOpacity, Alert, Picker } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { Container, Form } from './styles';

import Background from '~/components/Background';
import Input from '~/components/Input';

import { states } from '~/util/states';

export default function SignUp({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, usetCpf] = useState('');
  const [estado, setEstado] = useState('');
  const [tipo, setTipo] = useState('medico');
  const [crm, setCrm] = useState('');
  const [cnes, setCnes] = useState('');

  function handleSubmit() {
    if (!nome) {
      Alert.alert('Aviso', 'Nome é obrigatório');
    } else if (!email) {
      Alert.alert('Aviso', 'Email é obrigatório');
    } else if (!cpf) {
      Alert.alert('Aviso', 'CPF é obrigatório');
    } else if (!estado) {
      Alert.alert('Aviso', 'Selecione seu estado');
    } else if (!crm) {
      Alert.alert('Aviso', 'CRM é obrigatório');
    } else if (!cnes) {
      Alert.alert('Aviso', 'Selecione um CNES');
    } else if (!senha) {
      Alert.alert('Aviso', 'Senha é obrigatória');
    } else {
      aqui;
    }

    navigation.navigate('Termos', {
      usuario: {
        nome,
        email,
        cpf,
        estado,
        tipo,
        crm,
        cnes,
        senha,
      },
    });
  }

  return (
    <Background>
      <Container>
        <Form>
          <Input
            label="Nome"
            value={nome}
            onChangeText={setNome}
            keyboardType="default"
          />
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            label="CPF"
            value={cpf}
            onChangeText={usetCpf}
            keyboardType="number-pad"
          />
          <Picker
            mode="dropdown"
            selectedValue={estado}
            style={{ height: 64, width: '100%' }}
            onValueChange={itemValue => setEstado(itemValue)}
          >
            <Picker.Item label="Selecione o seu estado" value="" />
            {states.map(state => (
              <Picker.Item key={state} label={state} value={state} />
            ))}
          </Picker>
          <Picker
            selectedValue={tipo}
            style={{ height: 64, width: '100%' }}
            onValueChange={itemValue => setTipo(itemValue)}
          >
            <Picker.Item label="Enfermeira" value="enfermeira" />
            <Picker.Item label="Médico" value="medico" />
          </Picker>
          <Input
            label="CRM"
            value={crm}
            onChangeText={setCrm}
            keyboardType="decimal-pad"
          />
          <Picker
            selectedValue={cnes}
            style={{ height: 64, width: '100%' }}
            onValueChange={itemValue => setCnes(itemValue)}
          >
            <Picker.Item label="Selecione CNES" value="" />
            <Picker.Item label="1123" value="1123" />
            <Picker.Item label="1113" value="1113" />
          </Picker>
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
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </Container>
    </Background>
  );
}

SignUp.navigationOptions = ({ navigation }) => ({
  title: 'SAD',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
