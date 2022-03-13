import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'

function LoginPage(){

    let nav = useNavigate();
    
    const login=()=>{
        const pat= '/dashboard'
        nav(pat)
    }

    function checkVal(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('pass').value
        const msg = document.getElementById('login-empty-msg')
        if(username.length==0||password.length==0){
            msg.style.display="block"
        }else{
            msg.style.display="none"
            login()
        }
    }

    return(
        <div className='log-pg-main'>
            <div className='log-pg-inr-cnt'>
                <div className='log-pg-cl1'>
                    <h1 className='rtwi'>Route the World with<span className='internet'> Internet</span></h1>
                    <h5 className='log-pg-inf'>Access information, knowledge, and learning anywhere and anytime you want</h5>
                </div>
                <div className='log-pg-cl2'>

                    <div className='log-pg-cl2-contents'>
                    <h2>Login</h2>
                        <div className='log-pg-uname'>
                            Username <input id="username" className='log-pg-inp'></input>
                        </div>
                        <div className='log-pg-uname'>
                            Password <input id="pass" type="password" className='log-pg-inp'></input>
                        </div>
                        <div className='log-pg-cl2-ops'>
                            <div className='log-pg-cl2-ops-l'><input type='checkbox'></input>Remember me</div>
                            <div className='log-pg-cl2-ops-r'>Forgot password?</div>
                        </div>
                        <div className='log-pg-empty-msg' id='login-empty-msg'>*Fields can't be empty</div>
                        <div className='log-pg-cl2-lgbtn' onClick={checkVal}>
                            <button>Login</button>
                        </div>
                        
                    </div>
                   
                </div>
            </div>    
        </div>
    )
}

export default LoginPage;