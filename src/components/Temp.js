import { useState } from 'react'
import './temp.css'

export const Temp=()=>{
    const[visible,setVisible] = useState(false);
    let toggleTemp=()=>{
        setVisible(!visible);
        f();
    }
    
    let f = ()=>{
        let d = document.getElementById('t');
        visible?document.getElementById('t').style.height="100%":document.getElementById('t').style.height="0%"
    }

    return(
        <div className='expand-temp'>
            <button onClick={toggleTemp}>Click me</button>
            <div id='t' className='temp-menu'>Menu1</div>
 
        </div>
    )
}