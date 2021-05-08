import React from 'react';
import Avatar from 'react-avatar';
import {Link} from "react-router-dom";

function Contact({contact}) {
    const {name, phone, email, id} = contact; 
    return (
        <tr>
        <td scope="row">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
            </div>
        </td>
        <td><Avatar name={name} className="mr-2" size="45" round={true}>{name}</Avatar><span className="m-2">{name}</span></td>
        <td>{phone}</td>
        <td>{email}</td>
        <td className="actions">
            <Link to={`/contacts/edit/${id}`}>
                <span className="material-icons">edit</span>
                </Link>
            <Link href="#">
                <span className="material-icons text-danger">remove_circle</span>
            </Link>
        </td>
    </tr>
    )
}

export default Contact
