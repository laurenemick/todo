import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../store/actions";

const TaskForm = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    })

    const handleChange = event => {
        setNewTask({
            ...newTask, 
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(addTask(newTask));
        // TODO reset to empty form
    }

    return (
        <div>
            <form>
                <div className="form-details">
                    <label>
                        Task:
                        <input type="text" name="title" onChange={handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" onChange={handleChange} />
                    </label>
                </div>
            </form>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default TaskForm;