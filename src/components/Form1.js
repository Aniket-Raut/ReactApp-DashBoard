import './input1.css'
import { useNavigate } from 'react-router-dom'

export const Form1=()=>{
    let nav = useNavigate()
    const go=()=>{
        let path = '/login';
        nav(path);
    }

    return(
        <div className='ip1-super'>
            <div className='ip1-main'>
                <h3>Registration</h3>
                <div className='ip1-first-cnt'>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Full Name</div>
                        <input></input>
                    </div>
                </div>

                <div className='ip1-first-cnt'>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Username</div>
                        <input></input>
                    </div>
                </div>
                <div className='ip1-first-cnt'>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Password</div>
                        <input type="password"></input>
                    </div>
                </div>
                <div className='ip1-first-cnt'>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Role</div>
                        <input></input>
                    </div>
                </div>

                <div className='ip1-last-cnt'>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Age</div>
                        <input></input>
                    </div>
                    <div className='ip1-cl1'>
                        <div className='ip1-fname'>Gender</div>
                        <select className='ip1-sel'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                        </select>
                    </div>
                </div>

                <div className='f1-btn-cu'>
                    <button onClick={go}>Create User</button>
                </div>
            </div>
        </div>
        
    )
}