import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema} from "../schema/cryptoSchema";
import { Pair } from "../types";

export async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data:{Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
   
}

export async function fetchCurrentCryptoPrice(pair:Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.crypto}&tsyms=${pair.currency}`
    const { data : {DISPLAY}} = await axios(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.crypto][pair.currency])
    
    if(result.success){
        return result.data
    }
   
}