import thumbnail from "../actions/thumbnailLoader"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function VideoCard(props){
    
    const id = props.link.split('=')[1]

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDSCKTeAgY144-IOYpKZLqTZRdrYC7DLaU&part=snippet`

    const [thumbID, setThumbID] = useState(null)
    
    thumbnail(url)
    .then(data => {
        console.log(data)
        const thumbID = data.items[0].snippet.thumbnails.medium.url
        setThumbID(thumbID)
    })

    return (<>
    <div className='videocard'>
        <a href={props.link} target="_blank"><img src={thumbID} alt='thumbnail'/></a>
        <Link to={`${props.id}/`} className='showlink'><h4>{props.name}</h4></Link>
    </div>
    </>)
}