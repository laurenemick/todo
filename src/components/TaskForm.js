import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../store/actions";

import { Button, Card, TextField } from "@mui/material";

// TODO: add form validation

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
        dispatch(addTask(newTask))
        // TODO reset to empty form
    }

    return (
        <Card className="form" style={{backgroundColor: "#F5F5F5"}}>
            <div className="form-details">
                <TextField 
                    id="outlined-basic" 
                    label="Task" 
                    variant="outlined" 
                    onChange={handleChange} 
                    name="title"
                    style={{
                        backgroundColor: "white"
                    }}
                />
                <TextField
                    name="description" 
                    onChange={handleChange} 
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={2}
                    style={{
                        backgroundColor: "white"
                    }}
                />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>Add</Button>
            </div>
        </Card>
    )
}

export default TaskForm;
