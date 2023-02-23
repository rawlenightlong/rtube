import thumbnail from "../actions/thumbnailLoader"
import { useState } from "react"

export default function VideoCard(props){
    
    const id = props.link.split('=')[1]

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDYAzRWbuCE8C3MB0tnjot6kHv_2Fa_r1c&part=snippet`

    const [thumbID, setThumbID] = useState(null)
    
    thumbnail(url)
    .then(data => {
        const thumbID = data.items[0].snippet.thumbnails.medium.url
        setThumbID(thumbID)
    })

    
    return (<>
    <div className='videocard'>
        <a href={props.link} target="_blank"><img src={thumbID} alt='thumbnail'/></a>
        <h1>{props.name}</h1>
    </div>
    </>)
}