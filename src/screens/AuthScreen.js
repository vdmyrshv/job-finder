import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { SafeAreaView } from 'react-native-safe-area-context'

const AuthScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Button
				buttonStyle={styles.button}
				title='Go to welcome screen'
				onPress={() => navigation.navigate('Welcome')}
			/>
		</SafeAreaView>
	)
}

export default AuthScreen

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 20,
		marginVertical: 5,
		backgroundColor: 'slateblue'
	}
})
