import React from 'react'
import '../styles/header.css'


function Header() {
    return (
        <React.Fragment>
            <ul className="header">
                <li>
                    <a style={{color: '#ffffff'}} href="index.html">Home</a>
                </li>
                <li>
                    <a style={{color: '#c1a57b'}} href="index.html">Tapasztalat</a>
                </li>
                <li>
                    <a style={{color: '#c1a57b'}} href="index.html">Képességek</a>
                </li>
                <li>
                    <a style={{color: '#c1a57b'}} href="index.html">Hobbik</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Header
