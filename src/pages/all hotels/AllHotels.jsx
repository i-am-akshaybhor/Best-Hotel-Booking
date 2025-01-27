import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import FilterBar from './FilterBar'
import { allHotels } from '../../data'
import { BsGrid3X2Gap } from 'react-icons/bs'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import Hotels from '../../components/hotels/Hotels'
import Footer from '../../components/footer/Footer'
import "./AllHotels.css"

const AllHotels = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FilterBar />
            <div className='allhotels-items'>
                <h2 className='allhotels-heading'>{allHotels.length} Hotel Found </h2>
                <div className='allhotels-icons'>
                    <HiOutlineSquares2X2 />
                    <BsGrid3X2Gap />
                </div>
            </div>
            <Hotels hotels={allHotels} />
            <Footer />
        </div>
    )
}

export default AllHotels
