import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';
import { SignOut } from '~/store/modules/auth/actions';
// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(SignOut());
  }

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
