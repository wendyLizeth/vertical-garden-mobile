import React, { useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native'
import HomeSlider from '../Components/HomeSlider'
import Slider from '../Components/Slider'
import Constants from 'expo-constants'

import { FontAwesome6 } from '@expo/vector-icons'

const images = [
  {
    name: 'Island',
    date: '12/02/22',
    image:
      'https://images.pexels.com/photos/17524686/pexels-photo-17524686/free-photo-of-islandia-paisaje-naturaleza-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Island',
    date: '23/04/03',
    image:
      'https://images.pexels.com/photos/20582193/pexels-photo-20582193/free-photo-of-islandia-paisaje-colinas-cerros.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Norway',
    date: '31/03/08',
    image:
      'https://images.pexels.com/photos/20582023/pexels-photo-20582023/free-photo-of-islandia-carretera-paisaje-persona.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Greenland',
    date: '04/10/10',
    image:
      'https://images.pexels.com/photos/1309855/pexels-photo-1309855.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Russia',
    date: '18/28/12',
    image:
      'https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const Home = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight + 52,
        marginLeft: 16,
      }}
    >
      {/* <HomeSlider data={images} /> */}
      <View>
        <Text
          style={{
            flex: 1,
            fontSize: 50,
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Make a better world. Vertical garden 🪴
        </Text>
      </View>

      {/* Search component */}
      <View style={styles.search}>
        <TextInput
          style={{ color: 'gray', width: '90%' }}
          placeholder='Search'
        />
        <FontAwesome6 name='magnifying-glass' size={24} color='gray' />
      </View>

      <Slider data={images} />
      <View style={{}}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    paddingHorizontal: 22,
    paddingVertical: 22,
    backgroundColor: 'rgba(224, 224, 224, 1)',
    borderRadius: 32,
    marginBottom: 10,
  },
})

export default Home
