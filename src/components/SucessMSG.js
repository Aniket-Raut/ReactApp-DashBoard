import './successmsg.css';

export const SuccessMSG = ()=>{
    return(
        <div className="scs-msg-cnt">
            <div className='scs-c-msg'>
            <div className='scs-c-done'><img className='scs-img' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-success-essentials-tanah-basah-basic-outline-tanah-basah.png"/></div>
            User Created Successfully</div>
            <div className='scs-c-close'>x</div>
        </div>
    )
}