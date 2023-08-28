import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';

import { BaseServiceService } from '../../services/BaseService'

import { HOME_SCREEN } from '../../constants/screens'

function Card({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [returnString, setReturnString] = useState('')

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true)

      BaseServiceService.loadString()
        .then((res) => {
          setReturnString(res.data.returnString)
        })
        .catch((err) => {
          Alert.alert('Alerta', 'Um erro ocorreu...')
        })
        .finally(() => setIsLoading(false))
    }

    fetchData()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Ir para home"
        onPress={() => navigation.navigate(HOME_SCREEN)}
      />
      <View style={{ marginTop: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text>{returnString}</Text>
        )}
      </View>
    </View>
  );
}

export default Card;
