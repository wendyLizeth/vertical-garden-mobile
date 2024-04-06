import React, { useState, useRef } from 'react'
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
  ScrollView,
  Switch,
  Animated,
  PanResponder,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome6 } from '@expo/vector-icons'

function CloseTimeModal({ openModal, setOpenModal }) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Si el desplazamiento hacia abajo es mayor a 50 unidades, cierra el modal
        if (gestureState.dy > 50) {
          setOpenModal(false)
        }
      },
      onPanResponderRelease: () => {
        // Vuelve el modal a su posición original
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start()
      },
    })
  ).current

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  const onChange = (e, selectedDate) => {
    setDate(selectedDate)
    setShow(false)
  }

  return (
    <View style={styles.mainContainer}>
      <Modal
        style={styles.modal}
        animationType='slide'
        transparent={true}
        visible={openModal}
      >
        <Animated.View
          style={[
            styles.modalContent,
            { transform: pan.getTranslateTransform() },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.title}>⏰ Update close time!</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 28,
              }}
            >
              <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 19, fontWeight: '600' }}>
                  Select an aperture time:
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'gray',
                    paddingLeft: 6,
                    marginTop: 4,
                  }}
                >
                  Make click in the square to open the Hour Picker. 👆
                </Text>
              </View>
              <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                onChange={onChange}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 28,
                width: '100%',
              }}
            >
              <Text style={{ width: '82%', color: 'rgba(69, 69, 69, 1)' }}>
                Do you want to get a notification when the valve is closed?
              </Text>
              <Switch
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 32,
              }}
            >
              <Text style={styles.selectedTime}>The close time will be: </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'rgba(97, 188, 132, 1)',
                }}
              >
                {date.toLocaleTimeString()}
              </Text>
            </View>
            <Pressable style={styles.update}>
              <Text style={styles.updateText}>Set Hour</Text>
            </Pressable>
            <Pressable
              style={styles.closeButton}
              onPress={() => setOpenModal(false)}
            >
              <FontAwesome6 name='xmark-circle' size={32} />
            </Pressable>
          </View>
        </Animated.View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(135, 135, 135, 1)',
  },
  modal: {
    backgroundColor: 'rgba(135, 135, 135, 1)',
    position: 'absolute',
  },
  modalContainer: {
    marginTop: 218,
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: 82,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffff',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    shadowRadius: 22,
    shadowOffset: 52,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 38,
    marginBottom: 10,
    fontWeight: '600',
  },
  datePicker: {
    width: '100%',
  },
  selectedTime: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(69, 69, 69, 1)',
  },
  update: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(92, 201, 140, 1)',
    marginTop: 52,
    borderRadius: 32,
  },
  updateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffff',
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 22,
    right: 22,
  },
})

export default CloseTimeModal
