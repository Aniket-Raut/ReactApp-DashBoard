import './card2.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

export const Card2= (props)=>{
    const[item1,setItem1] = useState(false);
    const[item2,setItem2] = useState(false);
    const[item3,setItem3] = useState(false);

    function toggle1(){
        const submenu=document.getElementById('submenu1')
        item1?submenu.style.height='fit-content':submenu.style.height='0'
        setItem1(val=>!val);
    }
    function toggle2(){
        setItem2(val=>!val);
    }
    function toggle3(){
        setItem3(val=>!val);
    }

    let nav = useNavigate()
    const adduser=()=>{
        let path = '/adduser';
        nav(path);      
    }

    const addI=()=>{
        let path = '/add';
        nav(path); 
    }

    const formtable=()=>{
        let path = '/table'
        nav(path)
    }

    return(
        <div className="card-2">
            {/* Temp value 1 */}
            <div className="i1" onClick={toggle1}>{props.i1}</div>
            {/* {item1&&<div id='submenu1' className="cd-submenu1">
                    <div className="cd-item" onClick={adduser}>Add User</div>
                    <div className="cd-item" onClick={addI} >item2</div>
                    <div className="cd-item">item3</div>
            </div>} */}
            <div id='submenu1' className="cd-submenu1">
                    <div className="cd-item" onClick={adduser}>Add User</div>
                    <div className="cd-item" onClick={addI} >item2</div>
                    <div className="cd-item" onClick={formtable}>Show Table</div>
            </div>

            {/* Temp value 2 */}
            <div className="i2" onClick={toggle2}>{props.i2}</div>
            {item2&&<div id='submenu2' className="cd-submenu2">
                    <div className="cd-item">item1</div>
                    <div className="cd-item">item2</div>
                    <div className="cd-item">item3</div>
            </div>}

            {/* Temp value 3 */}
            <div className="i3" onClick={toggle3}>{props.i3}</div>
            {item3&&<div id='submenu3' className="cd-submenu3">
                    <div className="cd-item">item1</div>
                    <div className="cd-item">item2</div>
                    <div className="cd-item">item3</div>
            </div>}
        </div>
    )
}