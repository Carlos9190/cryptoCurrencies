import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Qoute from './components/Quote'
import { FormCurrencies, QuoteResponse } from './types'

const initialQuote: QuoteResponse = {
  PRICE: '',
  HIGHDAY: '',
  LOWDAY: '',
  CHANGEPCT24HOUR: '',
  LASTUPDATE: ''
}

export default function App() {

  const [currency, setCurrency] = useState<FormCurrencies['currency']>('')
  const [cryptoCurrency, setCryptoCurrency] = useState<FormCurrencies['cryptocurrency']>('')
  const [callAPI, setCallAPI] = useState(false)
  const [result, setResult] = useState<QuoteResponse>(initialQuote)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const quoteCryptoCurrency = async () => {
      if (callAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
        const result = await axios.get(url)

        setLoading(true)
        setTimeout(() => {
          setResult(result.data.DISPLAY[cryptoCurrency][currency])
          setCallAPI(false)
          setLoading(false)
        }, 3000)
      }
    }

    quoteCryptoCurrency()
  }, [callAPI])

  const spinner = loading ? <ActivityIndicator size='large' color='#5E49E2' /> : <Qoute result={result} />

  return (
    <ScrollView>
      <Header />

      <Image
        style={styles.image}
        source={require('./assets/img/cryptocurrencies.png')}
      />

      <View style={styles.content}>
        <Form
          currency={currency}
          setCurrency={setCurrency}
          cryptoCurrency={cryptoCurrency}
          setCryptoCurrency={setCryptoCurrency}
          setCallAPI={setCallAPI}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        {spinner}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  content: {
    marginHorizontal: '2.5%'
  }
})