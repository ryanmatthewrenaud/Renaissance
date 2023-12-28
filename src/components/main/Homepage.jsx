import mainsite from './assests/styles/mainsite.css'
import { useEffect } from 'react'

export default function Homepage() {

    useEffect(() => {
        document.title = "Renaissance Tattoo - Home"
    })

    return (
        <div className="homepage">
            homepage
        </div>
    )
}