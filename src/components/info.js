import React from 'react';
import './info.css'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'



export default function Info() {

    

    return (
        <div className='container-info'>           
            <div className='foto'>
            </div>
            <div className='infos'>
                <h1 className='nome-completo'>Vinícius Melo</h1>
                <p className='cargo'>Frontend Developer</p>
                <span>
                    <a href='mailto:vinicius.apol.melo@gmail.com?Subject=Oportunidade%20de%20Emprego' target='_blank' rel="noreferrer">
                        <button className='email'><FaEnvelope className='email-icon' /> Email</button>
                    </a>
                    <a href='https://www.linkedin.com/in/vin%C3%ADcius-melo-59831522a/' target='_blank' rel="noreferrer">
                        <button className='linkedin'><FaLinkedin className='linkedin-icon' /> Linkedin</button>
                    </a>
                </span>
            </div>

        </div>
    )
}