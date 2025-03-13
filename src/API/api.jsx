import axios from 'axios'
const api=axios.create({
    baseURL:'https://v6.exchangerate-api.com/v6/6eafc8a25e2d60406f68f1aa'
})
export const convertCurr=async(fromCur,toCur,amount)=>{
    return await api.get(`/pair/${fromCur}/${toCur}/${amount}`)
}