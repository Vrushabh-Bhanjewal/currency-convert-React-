import axios from 'axios'

const api=axios.create({
    baseURL:'https://v6.exchangerate-api.com/v6/6eafc8a25e2d60406f68f1aa'
})
export const convertCurr=async(fromCur,toCur,amount)=>{
    const res= await api.get(`/pair/${fromCur}/${toCur}/${amount}`)
    console.log(res)
    return res.data.conversion_result
}