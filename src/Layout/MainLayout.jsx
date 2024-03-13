import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppBar from '../Components/AppBar'

const MainLayout = () => {
  return (
    <View style={styles.mainLayout}>
      <Text>Main Layout🤟</Text>
      <View style={styles.barContainer}>
        <AppBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  barContainer: {
    height: 65,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
})

export default MainLayout
