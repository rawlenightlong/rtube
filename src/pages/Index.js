import {Form, Link} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import videoCard from '../components/videocard'
import CreateForm from '../components/createform'

export default function Index(props){

    const videos = useLoaderData()


    return (<>
        <h1 className='yourvideos'> Your Videos:</h1>
        <div className="createform">
        <CreateForm/>
        </div>
        <div className="videocontainer" key="container">
            {videos.map((video, index) => {
                return (
                    <>
                        <div key={index}>
                        {videoCard(video)}
                        </div>
                    </>
                        )
                    }
                )
                }
        </div>
    
    
    </>)
}