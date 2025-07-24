import React, { useEffect, useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { CryptoCurrency, FormCurrencies } from '../types'

type FormProps = {
    currency: FormCurrencies['currency']
    setCurrency: React.Dispatch<React.SetStateAction<string>>
    cryptoCurrency: FormCurrencies['cryptocurrency']
    setCryptoCurrency: React.Dispatch<React.SetStateAction<string>>
    setCallAPI: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({ currency, setCurrency, cryptoCurrency, setCryptoCurrency, setCallAPI }: FormProps) {

    const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrency[]>([])

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

    const getCryptoCurrency = (cryptoCurrency: FormCurrencies['cryptocurrency']) => {
        setCryptoCurrency(cryptoCurrency)
    }

    const requestQuote = () => {
        if (!currency || !cryptoCurrency) {
            return Alert.alert('Error', 'Both fields are required')
        }

        setCallAPI(true)
    }

    return (
        <View>
            <Text style={styles.label}>Currency</Text>
            <Picker
                itemStyle={{ height: 120 }}
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
            <Picker
                itemStyle={{ height: 120 }}
                selectedValue={cryptoCurrency}
                onValueChange={cryptoCurrency => getCryptoCurrency(cryptoCurrency)}
            >
                <Picker.Item label='-- Select --' value='' />
                {cryptoCurrencies.map(crypto => (
                    <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                ))}
            </Picker>

            <Pressable
                style={styles.btnQuote}
                onPress={() => requestQuote()}
            >
                <Text style={styles.btnQuoteText}>Quote</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnQuote: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    btnQuoteText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase'
    }
})