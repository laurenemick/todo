import React from "react";

const Task = (props) => {
    const { id, title, description, isChecked } = props.task

    return (
        <div key={id} className="task">
            <h2>{title}</h2>
            <h3>{description}</h3>
            {isChecked ? <p>checked</p> : <p>unchecked</p>}
        </div>
    )
}

export default Task;