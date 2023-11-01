import { Form } from "react-router-dom"

function UpdateForm(props){
    return (<>
        <div className='updateform'>
        <h2>Update Video</h2>
        <Form action={`/update/${props.video.id}`} method="put">

           <input type='text' name='name' placeholder='Update video title' required defaultValue={props.video.name} size="20">
            
            </input>
            
            <br></br>

           <input type='text' name='link' placeholder='Update video link' required defaultValue={props.video.link}></input>
            
            <br></br>

            <button type='submit' className="inputbutton">Update video</button>
        </Form>
        </div>
        </>)
}

export default UpdateForm