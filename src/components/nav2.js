import { Link } from "react-router-dom"

export default function Nav(props){
    return (<>
        <header>
        <nav className="nav">
            <div className="logo">
                <Link to='/videos/'><img src="https://i.imgur.com/iKvGe2P.png" alt=''className ='icon'/></Link>
            </div>
            <Link to='/videos/'><h1>RawleTube</h1></Link>
        </nav>
        </header>
    </>)
}