import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import MainLayout from './src/Layout/MainLayout'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <MainLayout />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
