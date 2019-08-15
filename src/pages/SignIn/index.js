import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <TouchableOpacity
        mode="contained"
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </Background>
  );
}

SignIn.navigationOptions = ({ navigation }) => ({
  title: 'SAD',
});
