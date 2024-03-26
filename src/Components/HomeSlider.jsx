import React, { useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const WidthContainer = width * 0.9
const LateralSpace = (width - WidthContainer) / 2
const Space = 10
const BackDropHeight = height * 0.7

const HomeSlider = (data) => {
  const info = data.data

  const scrollX = useRef(new Animated.Value(0)).current

  function BackDrop({ scrollX }) {
    return (
      <View
        style={
          ([{ height: BackDropHeight, width, position: 'absolute', top: 0 }],
          StyleSheet.absoluteFillObject)
        }
      >
        {info.map((item, index) => {
          const inputRange = [
            (index - 1) * WidthContainer,
            index * WidthContainer,
            (index + 1) * WidthContainer,
          ]

          const outputRange = [0, 1, 0]

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange,
          })

          return (
            <Animated.Image
              source={{ uri: item.image }}
              key={index}
              blurRadius={4}
              style={{
                height: BackDropHeight,
                width,
                position: 'absolute',
                top: -80,
                opacity: opacity,
              }}
            />
          )
        })}
        <LinearGradient
          colors={['transparent', 'white']}
          style={{
            height: BackDropHeight,
            width,
            position: 'absolute',
            top: 0,
          }}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={info}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 192,
          paddingHorizontal: LateralSpace,
        }}
        decelerationRate={0}
        snapToInterval={WidthContainer}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * WidthContainer,
            index * WidthContainer,
            (index + 1) * WidthContainer,
          ]

          const outputRange = [0, -50, 0]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          })

          return (
            <View style={{ width: WidthContainer }}>
              <Animated.View
                style={{
                  marginHorizontal: Space,
                  padding: 0,
                  shadowOpacity: 1,
                  shadowOffset: 10,
                  shadowColor: 'gray',
                  borderRadius: 34,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  transform: [{ translateY }],
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.posterImage}
                />
                <View style={{ position: 'absolute', left: 16, bottom: 16 }}>
                  <Text
                    style={{ fontSize: 28, color: 'white', fontWeight: 600 }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 6,
                      fontSize: 14,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </Animated.View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -42,
  },
  posterImage: {
    width: '100%',
    height: WidthContainer * 1.4,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
})

export default HomeSlider
