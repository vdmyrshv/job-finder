import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const ReviewScreen = ({navigation}) => {
	return (
		<View>
			<Button
				title='Go to settings screen'
				onPress={() => navigation.navigate('Settings')}
			/>
		</View>
	)
}

export default ReviewScreen

const styles = StyleSheet.create({})
