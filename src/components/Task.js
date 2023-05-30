import React from "react";
import { useDispatch } from "react-redux";

import { deleteTask } from "../store/actions";

const Task = (props) => {
    const { id, title, description, isChecked } = props.task
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <div key={id} className="task">
            <h2>{title}</h2>
            <h3>{description}</h3>
            {isChecked ? <p>checked</p> : <p>unchecked</p>}
            <div>
                <button onClick={() => {handleDelete(id)}}>Delete</button>
            </div>
        </div>
    )
}

export default Task;
