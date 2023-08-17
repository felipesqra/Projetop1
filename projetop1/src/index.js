import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppWrapper } from './templates/AppWrapper'
import Router from './routes'

const App = () => {
  return (
    <SafeAreaProvider>
      <AppWrapper>
        <Router />
      </AppWrapper>
    </SafeAreaProvider>
  )
}

export default App
