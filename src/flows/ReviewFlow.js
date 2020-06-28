import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaView } from 'react-native-safe-area-context'

import ReviewScreen from '../screens/ReviewScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator()

const ReviewFlow = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Review" component={ReviewScreen} />
			<Stack.Screen name="Settings" component={SettingsScreen} />
		</Stack.Navigator>
	)
}

export default ReviewFlow

const styles = StyleSheet.create({})
