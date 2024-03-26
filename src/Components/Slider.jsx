import React, { useRef } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const WidthContainer = width * 0.6
const LateralSpace = (width - WidthContainer) / 2
const Space = 8

function Slider(data) {
  const info = data.data

  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={info}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          // paddingHorizontal: LateralSpace,
        }}
        decelerationRate={0}
        snapToInterval={WidthContainer}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <Animated.View style={{ width: WidthContainer }}>
              <View
                style={{
                  marginHorizontal: Space,
                  padding: 0,
                  borderRadius: 34,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.posterImage}
                />
                <View style={{ position: 'absolute', left: 16, bottom: 16 }}>
                  <Text
                    style={{ fontSize: 22, color: 'white', fontWeight: 600 }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 2,
                      fontSize: 12,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>
            </Animated.View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: -6,
  },
  posterImage: {
    width: '100%',
    height: WidthContainer * 1.4,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
})

export default Slider
