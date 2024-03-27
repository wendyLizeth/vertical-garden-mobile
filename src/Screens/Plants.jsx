import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'

const Plants = () => {
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52}}>
      <Text>Plants screen</Text>
    </ScrollView>
  )
}

export default Plants
