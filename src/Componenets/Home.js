import React from 'react';

import watch from '../Images/handwatch.jpg';
import cart from '../Images/cart.jpg';
const Home = ()=>{
    return(
        <>
        <div>
            <div className='cart-item'>
                <img src={cart} alt='cart-img' className='cart-img' />
            </div>
            <h1 >Home Componenet...</h1>
            <div className='container'>
                <div className='img-wrapper' >
                    <img src={watch} alt='watch-image' className='watch-img'/> 
                </div>
                <div className='text-wrapper'>
                    <span>
                        HandWatch
                    </span>
                    <span>
                        Price : $500
                    </span>
                </div>
                <div >
                    <button style={{margin:"10px",backgroundColor:"blue",padding:"5px"}}>Add To Cart</button>
                </div>
            </div>

        </div>
        </>
    );
}
export default Home;