import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import useFetch from '../hooks/useFetch'
import ValeStatus from '../Components/ValeStatus'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Monitoringregister from '../Components/Monirotingregister'




const Details = () => {
  const [valeStatus, setValeStatus] = useState(null)

  const {
    data: status,
    loading,
    error,
  } = useFetch('http://192.168.0.109:3000/api/vale')

  useEffect(() => {
    if (!loading && !error) {
      setValeStatus(status)
      console.log(valeStatus)
    }
  }, [status, loading, error])

  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52, paddingLeft: 18 }}>
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '700',
            color: 'rgba(105, 105, 105, 1)',
            marginVertical: 12,
          }}>
          ⌛Schedules
        </Text>
      </View>

      {/*Aperture time*/}
      <View style={{ marginRight: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Info')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 19,
            width: '100%',
            marginTop: 16,
            marginBottom: 20,
            paddingRight: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                marginVertical: 1,
                fontWeight: '700',
                paddingLeft: 14,
                paddingTop: 11,
              }}
            >
              🕐 Aperture time
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 19,
                marginVertical: 9,
                fontWeight: '700',
                paddingLeft: 25,
              }}
            >
              8:00 am
            </Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View >

      <View style={{ marginRight: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Info')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 19,
            width: '100%',
            marginTop: 0,
            marginBottom: 20,
            paddingRight: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                marginVertical: 1,
                fontWeight: '700',
                paddingLeft: 14,
                paddingTop: 11,
              }}
            >
              🕧 Close time
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 19,
                marginVertical: 9,
                fontWeight: '700',
                paddingLeft: 25,
              }}
            >
              10:30 am
            </Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '700',
            color: 'rgba(105, 105, 105, 1)',
            marginVertical: 12,
          }}>
          📆Actual data from garden
        </Text>
      </View>
      {/* Show vale status component */}
      <ValeStatus valeStatus={valeStatus} loading={loading} />
      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '700',
            color: 'rgba(105, 105, 105, 1)',
            marginVertical: 12,
          }}>
          🏡Last monitoring register
        </Text>
        <Monitoringregister valor="4°" dato="Temperatura" texto="Temperature of the air in the zone." />

      </View>


    </ScrollView >
  )
}

export default Details
