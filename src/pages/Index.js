import { useLoaderData } from 'react-router-dom'
import videoCard from '../components/videocard'
import CreateForm from '../components/createform'



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