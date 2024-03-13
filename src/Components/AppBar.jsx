import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <Text style={styles.text}>AppBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'black',
    paddingTop: 8,
  },
  text: {
    color: '#ffff',
    marginBottom: 24,
  },
})

export default AppBar
