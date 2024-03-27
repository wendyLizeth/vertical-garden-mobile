import React from 'react'
import 'react-native-gesture-handler'
import Navigation from './src/Navigation'
import { SliderProvider } from './src/Context/SiderContext'

export default function App() {
  return (
    <SliderProvider>
      <Navigation />
    </SliderProvider>
  )
}
