import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTask, updateTask } from "../store/actions";

import { Button, Card, Checkbox, IconButton, TextField } from "@mui/material";
import { Clear, Edit } from "@mui/icons-material";

// TODO - move task to bottom of list when user checks box

const Task = (props) => {
    const dispatch = useDispatch();
    const { id, title, description } = props.task;
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(description);

    // TODO chain these - useMemo
    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleEdit = (e) => {
        setUpdatedDescription(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(updateTask(props.task, updatedDescription))
    }


    return (
        <Card key={id} className="task-container" style={{backgroundColor: "#F5F5F5"}}>
            <div className="task-title">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                />
                <h2>{title}</h2>
            </div>
            <div className="edit-description">
                <h3 className="task-description">{description}</h3>
                <div className="edit-icon">
                    <IconButton edge="end" aria-label="edit" onClick={() => setEdit(!edit)}>
                        { edit ? <Clear /> : <Edit /> }
                    </IconButton>
                </div>

                { edit ?  (
                    // TODO make UI/UX better
                    <>
                        <TextField value={updatedDescription} onChange={handleEdit} /> 
                        <Button onClick={handleSubmit}>Submit</Button>
                    </>
                ) : (
                    <div />
                )}
            </div>
            <Button style={{marginLeft: "4%"}} onClick={() => dispatch(deleteTask(id))}>Delete</Button>
        </Card>
    )
}

export default Task;
