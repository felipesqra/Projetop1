import React from 'react';
import { View, Text, Button } from 'react-native';

import { CARD_SCREEN } from '../../constants/screens'

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Card</Text>
            <Button
                title="Ir para outra página"
                onPress={() => navigation.navigate(CARD_SCREEN)}
            />
        </View>
    );
}

export default Home;