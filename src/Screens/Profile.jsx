import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import useFetch from '../hooks/useFetch'

const Profile = () => {
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
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52 }}>
      <Text>Profile screen</Text>
    </ScrollView>
  )
}

export default Profile
