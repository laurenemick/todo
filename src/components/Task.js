import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTask } from "../store/actions";

import { Checkbox } from "@mui/material";

const Task = (props) => {
    const dispatch = useDispatch();
    const { id, title, description } = props.task
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <div key={id} className="task">
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <h2>{title}</h2>
            <h3>{description}</h3>
            <div>
                <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
            </div>
        </div>
    )
}

export default Task;
