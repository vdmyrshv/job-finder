import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Foundation, Fontisto, AntDesign } from '@expo/vector-icons'

import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import ReviewFlow from './ReviewFlow'

const MainFlowTab = createBottomTabNavigator()

const MainFlow = () => {
	const mapIcon = ({color}) => {
		//console.log("tint color", props)
		return <Foundation name='map' size={24} color={color} />
	}
	const deckIcon = ({ color }) => (
		<AntDesign name='idcard' size={24} color={color} />
	)
	const reviewIcon = ({ color }) => (
		<Fontisto name='preview' size={24} color={color} />
	)

	return (
		<>
			<MainFlowTab.Navigator
				tabBarOptions={{
					inactiveTintColor: 'orange',
					activeTintColor: 'greenyellow',
					inactiveBackgroundColor: 'darkcyan',
					activeBackgroundColor: 'darkcyan',
				}}
			>
				<MainFlowTab.Screen
					name='Map'
					component={MapScreen}
					options={{ tabBarIcon: mapIcon, tabBarLabel: 'Map!' }}
				/>
				<MainFlowTab.Screen
					name='Deck'
					component={DeckScreen}
					options={{ tabBarIcon: deckIcon }}
				/>
				<MainFlowTab.Screen
					name='ReviewFlow'
					component={ReviewFlow}
					options={{ tabBarIcon: reviewIcon }}
				/>
			</MainFlowTab.Navigator>
		</>
	)
}

export default MainFlow

const styles = StyleSheet.create({
	tab: {}
})
