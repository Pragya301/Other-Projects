import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    const mystyle = {
        margin: "50px auto auto auto",
        backgroundImage: "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
        borderRadius: "20px"
       };

    return (
        <div className='container' style={mystyle} >
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                    <Link to='/add' className='btn btn-outline-dark' style={{backgroundColor: "#9bb6cf"}} >Add Contact</Link>
                </div>
                <div className='col-md-10 mx-auto'>
                    <table className='table table-hover'>
                        <thead className='text-center' style={{backgroundColor: "#c2d1a3"}} >
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small me-2' style={{backgroundColor: "#a3cbd1"}} >Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small' style={{backgroundColor: "#d1a3a3"}} >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home;