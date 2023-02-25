import { Form } from "react-router-dom"

function UpdateForm(props){
    return (<>
        <div className='createform'>
        <h2>Update Video</h2>
        <Form action='create' method="post">
            <input type='text' name='name' placeholder='Update video title' required defaultValue={props.video.name}>
            </input>
            <input type='text' name='link' placeholder='Update video link' required defaultValue={props.video.link}></input><br></br>
            <button type='submit'>Update video</button>
        </Form>
        </div>
        </>)
}

export default UpdateForm