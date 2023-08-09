import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Card</Text>
      <Button
        title="Ir para outra página"
        onPress={() => navigation.navigate('Card')}
      />
    </View>
  );
}

export default HomeScreen;
