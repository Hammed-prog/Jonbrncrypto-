import React from 'react'
import { Link } from "react-router-dom";

import './main.css'

export const Main = () => {
  return (
    <div className='main'>
        <div className='aasa'>
        <Link to="/home" className='buttonss'>
            Vote
        </Link>
        </div>
    </div>
  )
}
