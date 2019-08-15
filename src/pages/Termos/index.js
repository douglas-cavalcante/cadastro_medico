import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { Container, Paragrafo, Aviso } from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function Termos({ navigation }) {
  const dispatch = useDispatch();
  const usuario = navigation.getParam('usuario');

  function handleSubmit() {
    dispatch(signUpRequest(usuario));
  }

  return (
    <Container>
      <Paragrafo>
        O Sistema de Apoio à Decisão no Manejo da Desidratação Infantil na
        Atenção Primária em Saúde é um aplicativo que combina modelos e dados em
        uma tentativa de fornecer informações precisas aos profissionais de
        saúde, que atuam no serviço público de saúde, com foco nos cuidados de
        crianças com sintomas de desidratação.
      </Paragrafo>

      <Paragrafo>
        As informações aqui dispostas seguem as recomendações do Manual de
        Atenção Integrada às Doenças Prevalentes na Infância (AIDPI) Neonatal e
        Criança de 2 Meses a 5 anos de idade, e do Ministério de Saúde, no
        intuito de apresentar o plano terapêutico adequado a cada caso
        apresentado, tendo em vista que a desitratação infantil, quando não
        tratada corretamente, pode levar a quadros de desnutrição e a morte.
      </Paragrafo>

      <Aviso>
        AS INFORMAÇÕES DISPONIVEIS NO APLICATIVO NÃO SUBSTITUEM, EM NENHUMA
        HIPÓTESE, A ORIENTAÇÃO MÉDICA.
      </Aviso>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={{
          alignSelf: 'center',
          backgroundColor: '#CCC',
        }}
      >
        ACEITO OS TERMOS
      </Button>
    </Container>
  );
}

Termos.navigationOptions = ({ navigation }) => ({
  title: 'SAD',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
