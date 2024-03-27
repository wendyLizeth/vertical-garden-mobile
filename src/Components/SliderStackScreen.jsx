import React, { useContext } from 'react'
import { Pressable, ScrollView, Text, View, Image } from 'react-native'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { SliderContext } from '../Context/SiderContext'

import { FontAwesome6 } from '@expo/vector-icons'

function SliderStackScreen() {
  const navigation = useNavigation()
  const { currentSliderItem, setCurrentSliderItem } = useContext(SliderContext)

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight + 52,
        marginHorizontal: 12,
      }}
    >
      <View>
        <Pressable
          onPress={() => navigation.navigate('HomeStack')}
          style={{
            position: 'relative',
            marginBottom: 8,
          }}
        >
          <FontAwesome6 name='arrow-left' size={28} color='black' />
        </Pressable>
        <Image
          source={{ uri: currentSliderItem.image }}
          style={{ width: '100%', height: 500, borderRadius: 22 }}
        />
        <Text style={{ marginTop: 0 }}>{currentSliderItem.name}</Text>
      </View>
    </ScrollView>
  )
}

export default SliderStackScreen
