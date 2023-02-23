import {Form, Link} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import videoCard from '../components/videocard'


export default function Index(props){

    const videos = useLoaderData()


    return (<>
     <h1>RawleTube</h1>
    {videos.map((video, index) => {
        return (
        <>
       

        <div className ='videocontainer' key={index}>
            {videoCard(video)}
        </div>
   
        </>
        )
    })}
    
    
    </>)
}