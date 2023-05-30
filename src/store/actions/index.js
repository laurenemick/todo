export const REQUEST_TASK_DATA = "REQUEST_TASK_DATA";
export const RECEIVE_TASK_DATA = "RECEIVE_TASK_DATA";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const fetchTasks = tasks => async dispatch => {
    dispatch({
        type: "REQUEST_TASK_DATA"
    });
    try {
        dispatch({
            type: "RECEIVE_TASK_DATA",
            tasks: tasks,
            isError: false,
            errorMsg: "",
        });
    } catch (e) {
        dispatch({
            type: "RECEIVE_TASK_DATA",
            tasks: [],
            isError: true,
            errorMsg: e,
        });
    }
};

export const addTask = (newTask) => {
    return { type: ADD_TASK, newTask};
};

export const deleteTask = (id) => {
    return { type: DELETE_TASK, id};
};
