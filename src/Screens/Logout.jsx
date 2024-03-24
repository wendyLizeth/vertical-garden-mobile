import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'

const Logout = () => {
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52 }}>
      <Text>Logout screen</Text>
    </ScrollView>
  )
}

export default Logout
