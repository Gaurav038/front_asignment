import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../API'
import './navbar.css'

function Navbar() {


  const navigate = useNavigate()

    const logOut = async() => {
        try {
          await axios.get(`${BASE_URL}/logout`, {withCredentials: true, credentials: 'include'})
          navigate('/login')
        
        } catch (error) {
          console.log(error);
         
        }
     }

  return (
    <nav>
      <ul className='main-nav'>
        <div>
           <li><Link to="/">Home</Link></li> 
        </div>
        <div>
            <li><Link to="/upload">Upload Image</Link></li>
           <li onClick={logOut} >Logout</li> 
        </div>
       
      </ul>
    </nav>
  )
}

export default Navbar