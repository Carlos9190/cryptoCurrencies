import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { QuoteResponse } from '../types'

type QuoteProps = {
    result: QuoteResponse
}

export default function Quote({ result }: QuoteProps) {

    if (!Object.keys(result).length) return null

    return (
        <View style={styles.result}>
            <Text style={[styles.text, styles.price]}>
                <Text style={styles.span}>{result.PRICE}</Text>
            </Text>
            <Text style={styles.text}>Highest price today: {''}
                <Text style={styles.span}>{result.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>Lowest price today: {''}
                <Text style={styles.span}>{result.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Change in the last 24h {'(%): '}
                <Text style={styles.span}>{result.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={styles.text}>Last update: {''}
                <Text style={styles.span}>{result.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        backgroundColor: '#5E49E2',
        padding: 20
    },
    text: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        paddingBottom: 5,
        marginBottom: 5
    },
    price: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    }
})