import React, {useState} from 'react'
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
const [selectAll, setSelectAll] = useState(""); 
const contact = useSelector(state => state.contacts.contacts);
    console.log(contact);
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" value={selectAll} onClick={()=> setSelectAll(!selectAll)} id="selectAll" className="custom-control-input" />
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
