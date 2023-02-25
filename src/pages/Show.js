import { Form } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import UpdateForm from "../components/updateform"
import VideoCard from "../components/videocard"

export default function Show(props){

    const video = useLoaderData()

    
    return(
        <div className='showvideo'>
            {VideoCard(video)}
            <div className='buttons'>
                <Form 
                action={`/videos/delete/${video.id}`}
                method='DELETE'
                >
                    <button>Delete {video.name}</button>
                </Form>

                <UpdateForm video={video}/>
                
            </div>
        </div>
    )
}