import React from 'react'
import img1 from '../icons/myTinerary.png'
import img2 from '../icons/arrow.png'
import img3 from '../icons/home.png'
import { Link } from 'react-router-dom';





function Landing() {
    return (
        <div className='container'>
            <div>
                <img alt='my tinerary' src={img1} />
            </div>
            <div>
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            </div>
            <div>
                <h3>Start browsing</h3>
                <div>
                    <Link to='/cities'><img alt='arrow' src={img2} /></Link>
                </div>
            </div>
            <p>Want to build your own MYtinerary?</p>
            <a href='#www.google.com'>Log in</a>
            <a href='#www.google.com'>Creato Account</a>
            <br />
            <img alt='home' src={img3} />
        </div>
    )
}



export {Landing}