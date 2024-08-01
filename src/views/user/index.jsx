import { useState,useEffect } from "react"
import api from '../../api';

import { Link } from "react-router-dom";

export default function UserIndex() {

    const [users,setUsers]=useState([]);

    const fetchDataUser = async()=>{
        await api.get('/api/users').then(response => {
            setUsers(response.data.data.data);
        })
    }

    //run hook useEffect
    useEffect(()=> {
        fetchDataUser();
    },[]);

    const deleteUser = async(id) => {
        await api.delete(`/api/users/${id}`).then(()=>{
            fetchDataUser();
        })
    }

    return (
      <div className="container mt-5 mb-5">
      <div className="row">
          <div className="col-lg-12">
              <Link to="/users/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">Tambah User</Link>
              <div className="card border-0 rounded shadow">
                  <div className="card-body">
                      <table className="table table-bordered">
                          <thead className="bg-dark text-white">
                              <tr>
                                  <th scope="col">Username</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Level</th>
                                  <th scope="col" style={{ 'width': '15%' }}>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  users.length > 0
                                      ?   users.map((user, index) => (
                                              <tr key={ index }>
                                                  <td>{user.username} </td>
                                                  <td>{ user.email }</td>
                                                  <td>{ user.level }</td>
                                                  <td className="text-center">
                                                      <Link to={`/users/edit/${user.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link>
                                                      <button onClick={()=>deleteUser(user.id)} className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                                  </td>
                                              </tr>
                                          ))

                                      :   <tr>
                                              <td colSpan="4" className="text-center">
                                                  <div className="alert alert-danger mb-0">
                                                      Data Belum Tersedia!
                                                  </div>
                                              </td>
                                          </tr>
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}