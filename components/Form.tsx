import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { FormCurrencies } from '../types'

export default function Form() {

    const [currency, setCurrency] = useState('')
    const [cryptoCurrency, setCryptoCurrency] = useState('')
    const [cryptoCurrencies, setCryptoCurrencies] = useState('')

    useEffect(() => {
        const API = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const result = await axios.get(url)
            setCryptoCurrencies(result.data.Data)
        }

        API()
    }, [])

    const getCurrency = (currency: FormCurrencies['currency']) => {
        setCurrency(currency)
    }

    return (
        <View>
            <Text style={styles.label}>Currency</Text>
            <Picker
                selectedValue={currency}
                onValueChange={currency => getCurrency(currency)}
            >
                <Picker.Item label='-- Select --' value='' />
                <Picker.Item label='Euro' value='EUR' />
                <Picker.Item label='US Dollar' value='USD' />
                <Picker.Item label='Mexican Peso' value='MXN' />
                <Picker.Item label='Colombian Peso' value='COP' />
            </Picker>

            <Text style={styles.label}>Cryptocurrency</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    }
})