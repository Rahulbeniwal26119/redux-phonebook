import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addContact} from "../../actions/contactAction";
import shortid from "shortid";
import {useHistory} from "react-router-dom"

function AddContact() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName ] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone ] = useState("");
    const createContact = (e)=>{
        e.preventDefault();
        const newContact = {
            id:shortid.generate() , name,phone,email
        }
        dispatch(addContact(newContact));
        console.log(name, phone, email);
        history.push("/")
    }
    return (
        <div className="cards border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=>createContact(e)}>
                    <div className="form-group mb-3">
                        <input type="text"
                        value={name}
                        className="form-control"
                        placeholder="Enter Your Name"
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>     
                    <div className="form-group mb-3">
                        <input type="text"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        placeholder="Enter Your Email"
                        />
                    </div>
                    <button className="btn-primary rounded" type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
