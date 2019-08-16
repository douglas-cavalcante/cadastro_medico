import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <View>
      <Button title="open" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
