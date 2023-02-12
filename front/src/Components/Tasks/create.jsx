import React, { useState } from "react";
import AutoUser from "../Auth/auth";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const {http} = AutoUser()
    const navigate = useNavigate()
    const [newTask, setNewTask] = useState()
    const handleChange = (e)=>{
        const title = e.target.title;
        const description = e.target.description;
        const status = e.target.status;
        const front_date = e.target.front_date;
        setNewTask(values => ({...values,[title]:values}))

    }
    const submitForm = ()=>{
        http.post('/tasks',newTask).then((res)=>{
                navigate('/dashboard')
        })
    }
  return (
    <div>
      <h2>New Task</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <label>title</label>
          <input type="text" name="title" className="form-control" value={newTask.title || ""} onChange={handleChange} />

          <label>description</label>
          <input type="text" name="description" className="form-control" value={newTask.description || ""} onChange={handleChange} />

          <label>Pending</label>
          <input type="radio" id="html" name="status" value="pending" />
          <label>Done</label>
          <input type="radio" id="html" name="status" value="done" />

          <label>front_date</label>
          <input type="date" name="front_date" className="form-control" value={newTask.front_date || ""} onChange={handleChange}/>

          <button type="button" className="btn btn-info" mt-2 onClick={submitForm}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
