import axios from "../../Connection/axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Task = () => {
    const [task, setTask] = useState([])
	useEffect(() => {
		GetTasks()
	}, [])
  const GetTasks = async () =>{
      await axios.get('/tasks').then(response =>{
          if (response.status === 200){
              setTask(response.data);
          }
      });
  }
  const Delete = async (id) => {
    try {
        const isConfirm = window.confirm("Delete Task");
        if (isConfirm) {
            await axios.delete(`http://127.0.0.1:8000/tasks/${id}`).then(response => {
                if (response.status === 200) {
                  GetTasks();
                }
            });
        }
    } catch (e) {
        console.log(e);
    }
}

    return (
        <div>
          <button >New Task</button>
             <table>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
          <th>date</th>
          <th>status</th>
          <th colSpan="3">changes</th>
        </tr>
      </thead> 
      <tbody>
      <tr>
            <td>Title 1</td>
            <td>Title</td>
            <td>10.02.2023</td>
            <td>pending</td>
            <td><button>Read</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={Delete}>Delete</button></td>
          </tr>    
        {task && task.map((item,index) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.front_date}</td>
            <td>{item.status}</td>
            <td><button><Link to={`/task/${item.id}`}>Read</Link></button></td>
            <td><button><Link to={`/task/${item.id}`}>Edit</Link></button></td>
            <td><button onClick={Delete}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    );
};

export default Task;