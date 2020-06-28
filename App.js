import { StatusBar } from 'expo-status-bar'
import React from 'react'

//navigation dependencies
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//icons
import { Ionicons } from '@expo/vector-icons'

//screens
import WelcomeScreen from './src/screens/WelcomeScreen'
import AuthScreen from './src/screens/AuthScreen'
import MainFlow from './src/flows/MainFlow'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {

	const welcomeIcon = () => (<Ionicons name="ios-menu" size={24} color="black" />)

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Tab.Navigator initialRouteName='Welcome' screenOptions={{tabBarVisible: false}}>
					<Tab.Screen
						name='Welcome'
						component={WelcomeScreen}
						options={{
							title: 'Welcome!',
							tabBarIcon: welcomeIcon,
						}}
					/>
					<Tab.Screen name='Auth' component={AuthScreen} />
					<Tab.Screen
						name='Main'
						component={MainFlow}
						options={{ title: 'Main!' }}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	menu: {
		marginRight: 10
	}
})
