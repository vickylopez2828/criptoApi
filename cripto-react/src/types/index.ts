import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema, PairShema, CryptoPriceSchema } from '../schema/cryptoSchema'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairShema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>