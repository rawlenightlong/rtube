import { Link } from "react-router-dom"

export default function Nav(props){
    return (<>
        <header>
        <nav className="nav">
            <div className="logo">
                <Link to='/'><img src="https://i.imgur.com/iKvGe2P.png" alt=''className ='icon'/></Link>
            </div>
            <Link to='/'><h1>RawleTube</h1></Link>
        </nav>
        </header>
    </>)
}