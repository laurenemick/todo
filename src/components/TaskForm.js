import React from "react";

import Task from "./Task";

const TaskForm = (props) => {
    // const handleChange = event => {
    //     setTask({
    //         ...newTask, 
    //         [event.target.title]: event.target.value
    //     })
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axiosWithAuth()
    //         .post("/tasks/task", {
    //             title: newTask.title,
    //             description: newTask.description
    //         })
    //         .then((res) => {
    //             fetchTasks();
    //             setIsUpdated(true);
    //             setTask({        
    //                 title: "",
    //                 description: "",
    //             });
    //         })
    //         .catch(err => console.log(err.message));
    // }

    return (
        <div>
            <form>
                <label>
                    Task:
                    <input type="text" name="title" />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
            </form>

        </div>
    )
}

export default TaskForm;