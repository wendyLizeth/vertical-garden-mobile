import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Screens/Profile'
import Logout from './Screens/Logout'
import Plants from './Screens/Plants'
import Historical from './Screens/Historical'
import Home from './Screens/Home'
import Risks from './Screens/Risks'

// icons
import { FontAwesome6 } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

// Crear el contenido personalizado para el drawer
function DrawerContent(props) {
  const navigation = useNavigation()
  const [activeScreen, setActiveScreen] = useState('')

  const CurtomDrawerItem = ({ name, component, icon }) => {
    const handlePress = () => {
      setActiveScreen(name) // Actualizar el estado con el nombre de la pantalla activa
      navigation.navigate(name)
    }

    return (
      <DrawerItem
        label={name}
        onPress={() => {
          props.navigation.navigate(name)
          handlePress()
        }}
        icon={({ color, size }) => (
          <FontAwesome6
            name={icon}
            size={size}
            color={color}
            style={{ marginRight: -22 }}
          />
        )}
        style={{
          backgroundColor:
            activeScreen === name ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
        }}
      />
    )
  }

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 12,
            marginLeft: 16,
          }}
        >
          <FontAwesome6
            name='font-awesome-logo-full'
            size={32}
            color='black'
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Título del Drawer
          </Text>
        </View>
        <View>
          <CurtomDrawerItem name={'Home'} component={Home} icon={'house'} />
          <CurtomDrawerItem
            name={'Profile'}
            component={Profile}
            icon={'circle-user'}
          />
          <CurtomDrawerItem
            name={'Historical'}
            component={Historical}
            icon={'book-bookmark'}
          />
          <CurtomDrawerItem name={'Plants'} component={Plants} icon={'tree'} />
          <CurtomDrawerItem
            name={'Logout'}
            component={Logout}
            icon={'door-closed'}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

function CustomDrawerIcon() {
  const navigation = useNavigation()

  return (
    <Pressable
      style={{ marginLeft: 8 }}
      onPress={() => navigation.toggleDrawer()}
    >
      <FontAwesome6 name='bars' size={32} color='black' />
    </Pressable>
  )
}

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 285,
        },
        drawerActiveTintColor: 'red',
        headerLeft: () => <CustomDrawerIcon />,
      }}
    >
      <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
      <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
      <Drawer.Screen name='Historical' component={Historical}></Drawer.Screen>
      <Drawer.Screen name='Plants' component={Plants}></Drawer.Screen>
      <Drawer.Screen name='Logout' component={Logout}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <MyDrawer />
    </NavigationContainer>
  )
}
