import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { get_workers } from '../ajax'
import { Redirect } from 'react-router'
import store from '../store'
import { NavLink } from 'react-router-dom'

const workerList = connect(({ workers }) => ({ workers }))(({ workers }) => {
    if(workers.size === 0){
        get_workers(store.getState().session.user_id)       
    }

    let renderWorkers = Array.from(workers, ([key, worker]) => {
        return (
            <tr key={key}>
                <td>{worker.name}</td>
                <td>{worker.email}</td>
                <td>Show Timesheets</td>
            </tr>
        )
    })

    return (
        <div className="container">
            <h5>Name: {store.getState().session.user_name}</h5>
            <h5>Your Workers</h5>
            <NavLink className="btn btn-dark ml-auto d-block" to="/new_worker">Add Worker</NavLink>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Show Timesheets</th>
                    </tr>
                </thead>
                <tbody>
                    {renderWorkers}
                </tbody>
            </table>
        </div>
    )
    
})

export default workerList
