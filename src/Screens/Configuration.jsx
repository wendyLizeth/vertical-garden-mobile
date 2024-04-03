import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'

const Configuration = () => {
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52 }}>
      <Text>Configuration screen</Text>
    </ScrollView>
  )
}

export default Configuration
