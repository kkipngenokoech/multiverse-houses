import { useState } from "react";

export default function Inquiry (){
    const [contact, setContact] = useState({name:'', email:'', remarks:''})

    const onChange = event =>{
        setContact({...contact, [event.target.id]: event.target.value})
    }
    function onSubmit (event){
        event.preventDefault()
        console.log(contact)
    }

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" placeholder="Name" id="name" value={contact.name} onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Email" value={contact.email} onChange={onChange}/>
            </div>
            <div className="form-control">
                <label htmlFor="remarks">Remarks</label>
                <input type="text" id="remarks" className="form-control" placeholder="Remarks" value={contact.remarks} />
            </div>
            <button className="btn btn-primary mt-2" disabled={!contact.name || !contact.email} onClick={onSubmit}>
                Submit
            </button>
        </form>
    )
}