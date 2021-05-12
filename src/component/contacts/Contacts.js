import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import { selectAllContact, clearAllContact, deleteSelectedContact } from "../../actions/contactAction";
function Contacts() {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState("");
    const contact = useSelector(state => state.contacts.contacts);
    const selectedContacts = useSelector((state) => state.contacts.selectedContact);

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contact.map(contact => contact.id)))
        }
        else 
        {
            dispatch(clearAllContact())
        }
    })
    console.log(contact);
    return (
        <div>
            {
                selectedContacts.length > 0 ?  (
                    <button onClick={()=> dispatch(deleteSelectedContact())} className="btn btn-danger mb-3">Delete Selected</button>
                ) : null
            }
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" value={selectAll} onClick={() => setSelectAll(!selectAll)} id="selectAll" className="custom-control-input" />
                                <label htmlFor="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map(contact => <Contact key={contact.id} contact={contact} selectAll={selectAll} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
