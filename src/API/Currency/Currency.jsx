import React, { useState } from 'react'
import style from './currency.module.css'
import { convertCurr } from '../api'

function Currency() {
const [amount,setAmount] =useState(0)
const [convAmt,convAmount] =useState(null)
const [from,setFrom]= useState('INR')
const [to,setTo]= useState('USD')
const [loading,setLoading] =useState(false)
const [err,setError] =useState()

    const handleConvert=async ()=>{
        try {
            setLoading(true)
            const res= await convertCurr(from,to,amount)
            console.log(res)
            convAmount(res.data.conversion_result)
            setLoading(false)
        } catch (error) {
            setError(error)
            console.log(error)
        }

    }
  return (
    <div className={style.back}>
        <section className={style.card}>
            <div>
                <h1>Currency Converter</h1>
            </div>
            <div>
                <label htmlFor="">Amount <input 
                    type="number" value={amount} 
                    onChange={e=>{
                        setAmount(e.target.value)
                        convAmount(null)}
                    } />
                </label>
            </div>
            <div className={style['flex-two']}>
                <label htmlFor="">From {" "}   
                    <select onChange={e=>setFrom(e.target.value)}>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="AUD">AUD</option>
                    </select>
                </label>
                <label htmlFor=""> To {" "} 
                    <select onChange={e=>setTo(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="AUD">AUD</option>
                    </select>
                </label>
            </div>
            <div>
                <button onClick={handleConvert} disabled={loading || amount <= 0} className={style.btn}>
                    {loading ? "Converting...":"Convert"}</button>
            </div>
            {
                convAmt && <div>
                    <h1>{amount} {from} = {convAmt} {to}</h1>
                </div>
            }
            {
                err && <div>
                    <h1>{err.message}</h1>
                </div>
            }
        </section>
    </div>
  )
}

export default Currency