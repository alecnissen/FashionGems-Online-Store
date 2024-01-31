import React from 'react'
import earringImageSpecialOffers from "../../../Images/earring-img-special-offers.png"
import earringImageNewArrivals from "../../../Images/img4.png";
import Timer from './Timer';


export default function TrendingAndOffers() {
  return (
    <div className='trending-offers-component-wrapper'>

        <div className='special-offers-content-wrapper'>

        <div className='special-offers-container'>
            <div className='special-offers-header-container'>


            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="header-gem-icon" viewBox="0 0 16 16">
  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
</svg>
                <h3>Special Offers
                </h3>
            </div>
        </div>


    <div className='earrings-card-container'>
        <div className='earrings-title-container'> 
            <h3>Earrings</h3>
            <p>By</p>
        </div> 
            
            <div className='img-container-earrings'>
            <img src={earringImageSpecialOffers} className="earring-img-styles"></img>
            </div>

            <div className='earrings-card-discount-div'>
                <p>50% Off!</p>
            </div>

            <button>Shop Now</button>

    </div>


    <div className='new-arrivals-card-container'>
        <div className='new-arrivals-title-container'> 
            <h3>New Arrivals</h3>
            <p>Discover out latest</p>
        </div>

        <img src={earringImageNewArrivals} className='new-arrivals-img-styles'></img>

        <div className='new-arrivals-discount-circle'> 
            <p>35% Off!</p>
        </div>

        <button>Shop Now</button>
    
    </div>

    <div className="special-offers-timer-countdown-container">
        <div className='special-offers-title-text'> 
            <h3>Special Offers</h3>
            <p>Ending Soon</p>
            
            <Timer duration={60 * 60 * 1000}></Timer>
        
        </div>

    </div>








    </div>


    <div className='trending-offers-container'> 
        <div className='trending-offers-header'> 
            <h3>Trending Offers</h3>
        </div>

            
        <div className='new-arrivals-card-container'>
        <div className='new-arrivals-title-container'> 
            <h3>New Arrivals</h3>
            <p>Discover out latest</p>
        </div>

        <img src={earringImageNewArrivals} className='new-arrivals-img-styles'></img>

        <div className='new-arrivals-discount-circle'> 
            <p>35% Off!</p>
        </div>

        <button>Shop Now</button>
    
    </div>


    </div>






    </div>
  )
}


