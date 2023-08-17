import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const AppWrapper = ({
  children
}) => {
  const { top, bottom } = useSafeAreaInsets()

  console.log(top, bottom)

  return (
    <>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </>
  )
}
