import React, { useRef } from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'
import HomeSlider from '../Components/HomeSlider'
import Constants from 'expo-constants'

const images = [
  'https://images.pexels.com/photos/17524686/pexels-photo-17524686/free-photo-of-islandia-paisaje-naturaleza-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/20582193/pexels-photo-20582193/free-photo-of-islandia-paisaje-colinas-cerros.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/20582023/pexels-photo-20582023/free-photo-of-islandia-carretera-paisaje-persona.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1309855/pexels-photo-1309855.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&w=600',
]

const Home = () => {
  return (
    <ScrollView>
      <HomeSlider data={images} />
      <View style={{ margin: 10 }}>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </View>
    </ScrollView>
  )
}

export default Home
