import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addContact, getContact, updateContact} from "../../actions/contactAction";
import shortid from "shortid";
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"

function EditContact() {
    let {id }= useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact);
    const [name, setName ] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone ] = useState("");
    // const createContact = (e)=>{
    //     e.preventDefault();
    //     const newContact = {
    //         id:shortid.generate() , name,phone,email
    //     }
    //     dispatch(addContact(newContact));
    //     console.log(name, phone, email);
    //     history.push("/")
    // }
    useEffect(()=>{
        if(contact != null)
        {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }

        dispatch(getContact(id));
        
    }, [contact, dispatch, id])

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact= Object.assign(contact, {name,phone,email});
        console.log(updateContact);
        dispatch(updateContact(update_contact));
        history.push("/")

    }
    return (
        <div className="cards border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={e => onUpdateContact(e)}>
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
                    <button className="btn-warning rounded" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact;
