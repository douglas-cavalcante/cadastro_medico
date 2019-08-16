import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View style={{ height: 100, backgroundColor: '#00BFFF' }}>
      <Text>Henrique Douglas Cavalcante Costa</Text>
    </View>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent;
