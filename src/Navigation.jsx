import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import Profile from './Screens/Profile'
import Logout from './Screens/Logout'
import Plants from './Screens/Plants'
import Historical from './Screens/Historical'

// icons
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

// Crear el contenido personalizado para el drawer
function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <FontAwesome6 name='bars' size={32} color='black' />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Título del Drawer
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator()

function MyDrawer() {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 285,
        },
        drawerActiveTintColor: 'black',
        headerLeft: () => <CustomDrawerIcon />,
      }}
    >
      <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
      <Drawer.Screen name='Historical' component={Historical}></Drawer.Screen>
      <Drawer.Screen name='Plants' component={Plants}></Drawer.Screen>
      <Drawer.Screen name='Logout' component={Logout}></Drawer.Screen>
    </Drawer.Navigator>
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

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <MyDrawer />
    </NavigationContainer>
  )
}
