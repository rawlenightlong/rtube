import { Link } from "react-router-dom"

export default function Nav(props){
    return (<>
        <header>
        <nav className="nav">
            <div className="logo">
                <img src="https://i.imgur.com/iKvGe2P.png" alt=''className ='icon'/>
            </div>
            <Link to='/videos'><h1>RawleTube</h1></Link>
        </nav>
        </header>
    </>)
}