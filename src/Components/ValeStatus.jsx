import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ValeStatus({ valeStatus, loading }) {
  return (
    <View style={styles.valeStatus}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: 'rgba(69, 69, 69, 1)',
        }}
      >
        🌻 Vale status
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
          color: 'rgba(105, 105, 105, 1)',
          marginTop: 8,
        }}
      >
        Is the Vale open or closed?
      </Text>
      <Text
        style={{
          fontWeight: '400',
          color: 'rgba(105, 105, 105, 1)',
          marginTop: 4,
        }}
      >
        You can see the state of the vale here in your application!
      </Text>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            valeStatus !== true
              ? 'rgba(46, 139, 87, 0.6)'
              : 'rgba(92, 201, 140, 0.9)',
          marginTop: 18,
          borderRadius: 18,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'white',
            padding: 16,
          }}
        >
          {console.log('Value status: ', valeStatus)}
          {(loading && (valeStatus !== true ? 'Closed' : 'Open')) ||
            'Loading...'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  valeStatus: {
    width: '96%',
    backgroundColor: 'rgba(92, 201, 140, 0.2)',
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginVertical: 8,
  },
})

export default ValeStatus
