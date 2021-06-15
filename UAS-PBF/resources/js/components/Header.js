import React from 'react'
import { Link } from 'react-router-dom'
import graduate from './graduate.png'
 
const Header = () => (
    <nav className='navbar navbar-dark bg-dark'>
        {/* <div className='container'> */}
            <div>
                <img src={graduate} style={{maxHeight: "80px", maxWidth: "80px"}} className="graduate"/>
            </div>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Daftar Data Mahasiswa JTI Kelas TI-3F</Link>
            </div>
        {/* </div> */}
    </nav>
)
 
export default Header