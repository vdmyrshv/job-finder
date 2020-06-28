import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//navigation
import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaView } from 'react-native-safe-area-context'

//icons
import { Feather } from '@expo/vector-icons'

//screens
import ReviewScreen from '../screens/ReviewScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator()

const ReviewFlow = ({ navigation }) => {
	const settingsIcon = () => (
		<TouchableOpacity
			onLongPress={() => navigation.navigate('Settings')}
		>
			<Feather
				style={styles.gear}
				name='settings'
				size={24}
				color='black'
			/>
		</TouchableOpacity>
	)

	return (
		<Stack.Navigator
			screenOptions={{ headerStyle: { backgroundColor: 'orange' } }}
		>
			<Stack.Screen
				name='Review'
				component={ReviewScreen}
				options={{ title: 'Review Jobs', headerRight: settingsIcon }}
			/>
			<Stack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{ title: 'Your settings' }}
			/>
		</Stack.Navigator>
	)
}

export default ReviewFlow

const styles = StyleSheet.create({ gear: { marginRight: 10 } })
