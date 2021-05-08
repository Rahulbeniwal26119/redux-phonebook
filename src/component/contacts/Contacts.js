import React from 'react'
import { useSelector } from "react-redux";
import Contact from "./Contact";
import {Link} from "react-router-dom";

function Contacts() {
    const contact = useSelector(state => state.contacts.contacts);
    console.log(contact);
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map(contact => <Contact key={contact.id} contact={contact}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
