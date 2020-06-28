import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const SettingsScreen = ({navigation}) => {
    return (
        <View>
            <Button title='Go to review screen' onPress={() => navigation.navigate('Review')} />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
