import { REQUEST_TASK_DATA, RECEIVE_TASK_DATA, ADD_TASK, DELETE_TASK } from "../actions";

export const initialState = {
    tasks: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TASK_DATA:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMsg: "",
            };

        case RECEIVE_TASK_DATA:
            return {
                ...state,
                tasks: action.tasks,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg,
            };

        case ADD_TASK:
            const { title, description } = action.newTask
            const newTask = {
                id: Date.now(),
                title: title,
                description: description,
                isChecked: false,
            }
            
            return {
                ...state,
                tasks: state.tasks.concat(newTask),
            };

        case DELETE_TASK:
            const newList = state.tasks.filter((data)=> data.id !== action.id)

            return {
                ...state,
                tasks: newList,
            };

        default:
            return state;
        }
    };
