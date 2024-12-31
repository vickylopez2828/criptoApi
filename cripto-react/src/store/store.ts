import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";

type CryptoStore ={
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCrypto: () => Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}



export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    loading:false,
    fetchCrypto: async () =>{
        const cryptoCurrencies = await getCryptos()
        set(() =>({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) =>{
        set(() =>({
            loading:true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() =>({
            result,
            loading:false
        }))
    }
})))