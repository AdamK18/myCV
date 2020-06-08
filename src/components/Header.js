import React from 'react'
import '../styles/header.css'


function Header() {
    return (
        <div className='header'>
            <ul>
                <li>
                    <a style={{color: '#ffb400'}} href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Tapasztalat</a>
                </li>
                <li>
                    <a href="index.html">Képességek</a>
                </li>
                <li>
                    <a href="index.html">Hobbik</a>
                </li>
                <li>
                    <a href="index.html">Elérhetőségek</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
