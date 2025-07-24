export type FormCurrencies = {
    currency: string
    cryptocurrency: string
}

export type CryptoCurrency = {
    CoinInfo: {
        Id: string
        FullName: string
        Name: string
    }
}

export type QuoteResponse = {
    PRICE: string
    HIGHDAY: string
    LOWDAY: string
    CHANGEPCT24HOUR: string
    LASTUPDATE: string
}