import { Link } from "react-router-dom"

export default function Nav(props){
    return (<>
    <Link to='/videos'>
        <nav className="nav">
            <div className="logo">
                <img src="https://i.imgur.com/iKvGe2P.png" alt=''className ='icon'/>
            </div>
            <h1>RawleTube</h1>
        </nav>
    </Link>
    </>)
}