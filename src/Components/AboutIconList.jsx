import {FaQuestion} from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
function AboutIconList() {
  return (

    <div className='about-link'>
        <Link to='/about'>

            <FaQuestion size={30}/>
        </Link>
        
    </div>
  )
}

export default AboutIconList
