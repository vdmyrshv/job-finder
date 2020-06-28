import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Foundation, Fontisto, AntDesign } from '@expo/vector-icons'

import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import ReviewFlow from './ReviewFlow'

const MainFlowTab = createBottomTabNavigator()

const MainFlow = () => {
	const mapIcon = () => <Foundation name='map' size={24} color='darkcyan' />
    const deckIcon = () => <AntDesign name="idcard" size={24} color="darkcyan" />
	const reviewIcon = () => <Fontisto name='preview' size={24} color='darkcyan' />
	return (
		<>
			<MainFlowTab.Navigator>
				<MainFlowTab.Screen
					name='Map'
					component={MapScreen}
					options={{ tabBarIcon: mapIcon }}
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

const styles = StyleSheet.create({})
