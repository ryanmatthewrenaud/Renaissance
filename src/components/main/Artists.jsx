import mainsite from './assests/styles/mainsite.css'
import dude1 from './assests/images/temp/smiling dude.png'
import dude2 from './assests/images/temp/smiling dude2.png'
import dude3 from './assests/images/temp/smiling dude3.png'
import dude4 from './assests/images/temp/smiling dude4.png'

import { useState } from 'react'

export default function Artists() {

    const [artists, setArtists] = useState([
        {
            name: 'Temp Guy',
            alt: 'temp text',
            loc: dude1
        },
        {
            name: 'Temp Guy',
            alt: 'temp text',
            loc: dude2
        },
        {
            name: 'Temp Guy',
            alt: 'temp text',
            loc: dude3
        },
        {
            name: 'Temp Guy',
            alt: 'temp text',
            loc: dude4
        }


    ])

    return (
        <div className='artists'>
            {artists.map((artist) => {
                <img src={artist.loc} alt={artist.alt} />
            })}
        </div>
    )
}