import React from 'react'
import trollFace from '../img/troll-face.svg'

export default function Nav() {
    return (
        <header className='header'>
            <img src={trollFace} className="header--img" alt="trol-face" />
            <h2 className='header--title'>Meme Generator</h2>
            <p className='header--project'>JXL PROJECTS</p>
        </header>
    )

}