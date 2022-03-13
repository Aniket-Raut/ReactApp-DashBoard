import { useNavigate } from 'react-router-dom'
import './navbar.css'

export const NavBar=(props)=>{
    let v = useNavigate();
    const l=()=>{
        let path="/"
        v(path)
    }

    const login=()=>{
        let pat = '/login'
        v(pat)
    }
    return(
        <div className="navbar-cnt">
            <div className="nv-logo" onClick={l}>Logo</div>
            <div className="nv-space"></div>
            <div className="nv-right-cnt">
                <img className="nv-bell" src="https://img.icons8.com/material-sharp/24/ffffff/bell.png" width="25px" height="25px"></img>
                <img className="nv-prof" onClick={login} src={props.uimg} width="32px" height="32px"></img>
            </div>
        </div>
    )
}