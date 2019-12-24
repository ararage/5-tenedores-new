import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>5 tenedores</Text>
      <Button
        title="click Me"
        loading={true} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
