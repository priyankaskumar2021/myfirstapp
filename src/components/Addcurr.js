import React from 'react';
import "./Addcur.css"
const Addcurr = () => {
    return (
        
            <div class="wrapper">
                <form class="form">
                    <div class="pageTitle title">Add New Cryptocurrency </div>
                    <div class="secondaryTitle title">Please fill all the fields.</div>
                    <input type="text" class="cname" placeholder=" Currency Name" />
                    <input type="text" class="csymbol" placeholder="Currency Symbol" />
                    <input type="text" class="pusd" placeholder="Price USD" />
                    <input type="text" class="csymbol" placeholder="Percent change usd last 24_hours" />
                    <button class="submit formentry">Add Currency</button>
                </form>
            </div>


      
    );
};

export default Addcurr;