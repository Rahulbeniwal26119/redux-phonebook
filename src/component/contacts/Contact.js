import React, {useState} from 'react';
import Avatar from 'react-avatar';
import {Link} from "react-router-dom";
import {deleteContact} from "../../actions/contactAction";
import {useDispatch} from "react-redux";

function Contact({contact, selectAll}) {
    const dispatch = useDispatch()
    const {name, phone, email, id} = contact; 
    return (
        <tr>
        <td scope="row">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" checked={selectAll} className="custom-control-input" />
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
                <span className="material-icons text-danger" onClick={() => (dispatch(deleteContact(id)))}>remove_circle</span>
            </Link>
        </td>
    </tr>
    )
}

export default Contact
