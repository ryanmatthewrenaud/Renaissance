import mainsite from './assests/styles/mainsite.css'
import { useEffect } from 'react'

export default function Contact() {

    useEffect(() => {
        document.title = "Renaissance Tattoo - Contact Us"
    })

    return (
        <div className="contact">
            Contact
        </div>
    )
}