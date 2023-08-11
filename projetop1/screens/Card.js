import React from 'react';
import { View, Text, Button } from 'react-native';

function Card({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Ir para home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

export default Card;