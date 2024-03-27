import React, { useState, useRef, createContext, useContext } from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import Profile from './Screens/Profile'
import Logout from './Screens/Logout'
import Plants from './Screens/Plants'
import Historical from './Screens/Historical'
import Home from './Screens/Home'
import Risks from './Screens/Risks'

// icons
import { FontAwesome6 } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import { createStackNavigator } from '@react-navigation/stack'
import SliderStackScreen from './Components/SliderStackScreen'

// Stack navigation
const HomeSliderStack = createStackNavigator()

function SliderStack() {
  return (
    <HomeSliderStack.Navigator
      initialRouteName='HomeStack'
      screenOptions={{ headerShown: false }}
    >
      <HomeSliderStack.Screen name='HomeStack' component={Home} />
      <HomeSliderStack.Screen name='Slider' component={SliderStackScreen} />
      <HomeSliderStack.Screen name='Risks' component={Risks} />
    </HomeSliderStack.Navigator>
  )
}

// Crear el contenido personalizado para el drawer
function DrawerContent(props) {
  const navigation = useNavigation()
  const [activeScreen, setActiveScreen] = useState('Home')

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
            name='bars-staggered'
            size={32}
            color='black'
            backgroundColor='transparent'
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
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
    <Pressable style={{}} onPress={() => navigation.toggleDrawer()}>
      <FontAwesome6 name='bars' size={38} color='black' />
    </Pressable>
  )
}

const CustomHeaderComponent = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 18,
      }}
    >
      <CustomDrawerIcon />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <FontAwesome6 name='plus' size={32} color='black' />
        <FontAwesome6
          name='user'
          size={32}
          color='black'
          style={{ marginLeft: 16 }}
        />
      </View>
    </View>
  )
}

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 20,
        },
        header: () => <CustomHeaderComponent />,
        headerShown: true,
        headerTransparent: true,
        headerLeft: () => <CustomDrawerIcon />,
      }}
    >
      <Drawer.Screen name='Home' component={SliderStack}></Drawer.Screen>
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
