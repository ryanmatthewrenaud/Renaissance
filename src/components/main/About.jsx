import mainsite from './assests/styles/mainsite.css'
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = "Renaissance Tattoo - About Us"
    })
    return (
        <div className="about">
            About
        </div>
    )
}