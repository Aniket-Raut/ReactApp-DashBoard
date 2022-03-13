import './formtable.css'

export const FormTable=()=>{
    return(
        <div className='form-table-main-page'>
            <div className='form-table-cnt'>
                <div className='labels-col'>
                    <div className='form-table-f1'>ID</div>
                    <div className='form-table-f2'>Name</div>
                    <div className='form-table-f3'>Actions</div>
                </div>
                <div className='form-table-data'>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                    <FormTableCard uid="1211" fname="Aniket Raut"></FormTableCard>
                </div>
                
            </div>
            <div className='form-table-bottom-console'>
                <button>Add</button>
            </div>
        </div>
        
    )
}


function FormTableCard(props){
    return(
        <div className='form-table-card'>
            <div className='form-table-card-field'>{props.uid}</div>
            <div className='form-table-card-field-name'>{props.fname}</div>
            <button className='form-table-card-editbtn'>edit</button>
        </div>
    )
}