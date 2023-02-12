import React, { useEffect } from 'react';
import { useState } from 'react';
import AutoUser from '../Auth/auth';
import { NavLink} from 'react-router-dom';


const GetTasks = () => {
    const {http} = AutoUser()
    const [tasks,setTasks] = useState([]);

    useEffect(() =>{
            fetchAllTasks();
    }, []);
    
    const fetchAllTasks = () => {
        http.get('/tasks').then(res=>{
            setTasks(res.data)
        })
    }
    return (
        <div>
            <h2>Task List</h2>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>number</th>
                        <th>title</th>
                        <th>description</th>
                        <th>status</th>
                        <th>front_date</th>
                        <th colSpan={3}>changes</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task,index)=>(
                        <tr key={task.id}>
                        <td>{index}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                        <td>{task.front_date}</td>
                        <td><button type="button" className="btn btn-primary"><NavLink className="nav-link" to="/edit/{task.id}">Create Task</NavLink></button></td>
                        <td><button type="button" className="btn btn-danger"><NavLink className="nav-link" to="/delete/{task.id}">Edit Task</NavLink></button></td>
                        <td><button type="button" className="btn btn-success"><NavLink className="nav-link" to="/show/{id}">Show Task</NavLink></button></td>
                    </tr>
                    ))
                    } 
                </tbody>
            </table>
            <div className="container">

      </div> 
        </div>
    );
};

export default GetTasks;