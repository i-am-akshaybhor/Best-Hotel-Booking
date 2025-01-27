import React from 'react'
import Guests from './Guests'
import Location from './Location'
import Date from './Date'
import "./hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <h1 > Start your journey with us </h1>
                <p>Find what makes you happy anytime, anywhere</p>
                <div className='hero-search-container'>
                    <div className='hero-search'>
                        <div className='hero-wrapper'>
                            <Location />
                            <Date />
                            <Guests />
                            <Link to="/hotels">
                                <div className='search-button'>
                                    <button>Search</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
