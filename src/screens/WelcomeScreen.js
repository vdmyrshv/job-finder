import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Button
				title='go to main flow'
				buttonStyle={[styles.button, { backgroundColor: 'darkred' }]}
				onPress={() => navigation.navigate('Main')}
			/>
			<Button
				title='go to Auth Menu'
				buttonStyle={[styles.button, { backgroundColor: 'chartreuse' }]}
				onPress={() => navigation.navigate('Auth')}
			/>
		</SafeAreaView>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	button: { marginHorizontal: 20, marginVertical: 5 }
})
