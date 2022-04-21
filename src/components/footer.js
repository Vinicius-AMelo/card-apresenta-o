import {FaGithub, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import './footer.css'
export default function Footer() {
    return (
        <div className='container-footer'>
        <footer className='footer-icons'>
        <a href='/' target='_blank' rel="noreferrer">
            <FaTwitter className='icon--' />
            </a>
            <a href='/' target='_blank' rel="noreferrer">
            <FaWhatsapp className='icon--'/>
            </a>
            <a href='/' target='_blank' rel="noreferrer">
            <FaInstagram className='icon--'/>
            </a>
            <a href='/' target='_blank' rel="noreferrer">
            <FaGithub className='icon--'/>
            </a>
        </footer>
        </div>
    )
}