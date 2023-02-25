import { Link } from "react-router-dom"

export default function Nav(props){
    return (<>
    <Link to='/videos'>
        <nav className="nav">
            <img src="https://i.imgur.com/iKvGe2P.png" alt=''className ='icon'/><h1>RawleTube</h1>
        </nav>
    </Link>
    </>)
}