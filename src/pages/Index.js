import {Form, Link} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import videoCard from '../components/videocard'
import CreateForm from '../components/createform'
import tunnelvideo from "../assets/tunnel.mp4"


export default function Index(props){

    const videos = useLoaderData()


    return (<>
        <div className="indexpage">

            <div className="createform">
                <CreateForm/>
            </div>
            
            <div className="videocontainer" key="container">

                <h1 className='yours'>Your Videos:</h1>
                <div className="videos">
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
            </div>
        </div>
    </>)
}