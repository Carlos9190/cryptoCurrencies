import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

export default function Header() {
    return (
        <Text style={styles.title}>Cryptocurrencies</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#5E49E2',
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        paddingBottom: 10,
        marginBottom: 30
    }
})