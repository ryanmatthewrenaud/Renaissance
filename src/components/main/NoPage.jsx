import mainsite from './assests/styles/mainsite.css'
import error from './assests/images/404-error.gif'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NoPage() {

    useEffect(() => {
        document.title = "Renaissance Tattoo - ERROR"
    })

    return (
        <div className="nopage">
            <title>Test</title>
            <img src={error} alt="gif-404-error" />
            <h3>Page Not Found</h3>
            <Link to='/'><input type="button" value={"Go to Homepage"} /></Link>
        </div >
    )
}