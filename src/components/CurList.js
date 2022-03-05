import React, { useEffect, useState } from 'react';
import Addcurr from './Addcurr';
import "./CurList.css"
const CurList = () => {
    var [currency,setcurrency]=useState([]);
    
    useEffect(()=>{fetchData()},[currency]);
    async function fetchData(){
        const url="https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours";
       const response=await fetch(url);
       const result=await response.json();
      
       setcurrency(currency=result.data);
       console.log(currency[0].slug);
    }
    function loadAdd(){
        console.log("load add")
       document.getElementById("addform").style.visibility="visible";
    }
    
    return (
        <div className='container'>
        <div className='curlist'>
            <h1>Cryptocurrency</h1>
           { currency.map((c,key)=>(
                   
                
            <div className='left'>
                <div>
                <img src={c.slug} />
                </div>
            
           <div className='ns'>
            <p>{c.name}</p>
           <p>{c.symbol}</p>
           </div>
           <div className='pp'>
           <p>{c.metrics.market_data.price_usd}</p>
           <p>{c.metrics.market_data.percent_change_usd_last_24_hours}</p>
           </div>
           
           </div>
           ))}
           <div className='add' onClick={loadAdd}><b>+</b> Add a CyptoCurrency</div>
        </div>
         <div className='right' id="addform">
        
             <Addcurr />
             
         </div>


     
     </div>
    );
};

export default CurList;