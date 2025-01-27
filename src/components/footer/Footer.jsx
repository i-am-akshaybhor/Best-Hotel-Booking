import React from 'react'
import "./Footer.css"
import { destinations, info, services } from '../../data'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-lists'>
        <ul className='footer-list'>
            <h2>Destinations</h2>
            {destinations.map( (destination) =>(
                <li key={destination.id} className='footer-list-item' >{destination.title}</li>
            ))}
        </ul>

        <ul className='footer-list'>
            <h2>Information</h2>
            {info.map( (item) => (
                <li key={item.id} className='footer-list-item'>{item.title} </li>
            ))}
        </ul>

        <ul className='footer-list'>
            <h2>Services</h2>
            {services.map( (service) => (
                <li key={service.id} className='footer-list-item'>{service.title}</li>
            ))}
        </ul>

        <ul className='footer-list'>
            <h2>Contact</h2>
            <li className='footer-list-item' >
                <FaLocationDot /> Hinjewadi, Pune
            </li>
            <li className='footer-list-item'>
                <FaPhoneAlt /> +91 7721111111
            </li>
            <li className='footer-list-item'>
                <IoMdMail /> email@gmail.com
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
