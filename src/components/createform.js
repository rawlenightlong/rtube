import { Form } from "react-router-dom"

function CreateForm(props){
    return (<>
        <div className='createform'>
        <h2>Add a new video!</h2>
        <Form action='create' method="post">
            <input type='text' name='name' placeholder='Enter video title' required>
            </input>
            <input type='text' name='link' placeholder='Paste your video link' required></input><br></br>
            <button type='submit'>Add video</button>
        </Form>
        </div>
        </>)
}

export default CreateForm