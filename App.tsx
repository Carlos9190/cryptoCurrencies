import { StyleSheet, Image, View } from 'react-native'
import Header from './components/Header'
import Form from './components/Form'

export default function App() {
  return (
    <>
      <Header />

      <Image
        style={styles.image}
        source={require('./assets/img/cryptocurrencies.png')}
      />

      <View style={styles.content}>
        <Form />
      </View>
    </>
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