import './dashcard.css'

export const DashCard = (props)=>{
    return(
        <div className="dash-card">
            <div className="dc-title">{props.uname}</div>
            <div className="cr-img">
                <img src={props.uimg} width="130" height="130"/>
            </div>
            <div className="dc-cnt">
                <div className="dc-dsg">{props.dsg}</div>
                <div className="dc-loc">{props.loc}</div>
                <div className="dc-dob">{props.dob}</div>
            </div>
        </div>
    )
}