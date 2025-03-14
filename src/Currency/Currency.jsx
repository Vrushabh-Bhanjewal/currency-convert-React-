import React, { useState } from 'react'
import style from './currency.module.css'
import { convertCurr } from '../API/api'
import {useQuery} from '@tanstack/react-query'

function Currency() {

    const [amount,setAmount] =useState(0)
    const [from,setFrom]= useState('INR')
    const [to,setTo]= useState('USD')
    
    const {data:convAmt,isLoading,isError,error,refetch}= useQuery({
        queryKey:['currency'],
        queryFn:()=>convertCurr(from,to,amount),
        enabled:false,
    })
    const handleConvert=()=>{
        if(amount >0){
            refetch()
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
                    onChange={e=>setAmount(e.target.value)
                    } />
                </label>
            </div>
            <div className={style['flex-two']}>
                <label htmlFor="">From {" "}   
                    <select onChange={e=>setFrom(e.target.value)}>
                        {
                            ["INR","USD","EUR","GBP","AUD"].map((curr,index)=>{
                                return <option key={index} value={curr}>{curr}</option>
                            })
                        }
                    </select>
                </label>
                <label htmlFor=""> To {" "} 
                    <select onChange={e=>setTo(e.target.value)}>
                        {
                            ["USD","INR","EUR","GBP","AUD"].map((curr,index)=>{
                                return <option key={index} value={curr}>{curr}</option>
                            })
                        }
                    </select>
                </label>
            </div>
            <div>
                <button onClick={handleConvert} disabled={isLoading || amount <= 0} className={style.btn}>
                    {isLoading ? "Converting...":"Convert"}</button>
            </div>
            {
                convAmt && <div>
                    <h1>{amount} {from} = {convAmt} {to}</h1>
                </div>
            }
            {
                isError && <div>
                    <h1>{error.message}</h1>
                </div>
            }
        </section>
    </div>
  )
}

export default Currency