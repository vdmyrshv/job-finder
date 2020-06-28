import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button title='go to main flow' onPress={()=> navigation.navigate('Main') }  />
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})
