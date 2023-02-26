import { Form } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import UpdateForm from "../components/updateform"
import VideoCard from "../components/videocard"

export default function Show(props){

    const video = useLoaderData()
    const embedId = video.link.split("=")[1].split("&")[0]


    
    return(
        <div className='showvideo'>
            <div className="showvideocard">{VideoCard(video)}</div>
            <div className='buttons'>
                <Form 
                action={`/videos/delete/${video.id}`}
                method='DELETE'
                >
                    <button>Delete {video.name}</button>
                </Form> <br></br>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedId}`}>
        
                </iframe>
                <UpdateForm video={video}/>
                
            </div>
        </div>
    )
}