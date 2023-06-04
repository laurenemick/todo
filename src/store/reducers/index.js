import {
    ADD_TASK, 
    DELETE_TASK,
    RECEIVE_TASK_DATA, 
    REQUEST_TASK_DATA, 
    UPDATE_TASK,
} from "../actions";
import { v4 as uuid } from 'uuid';

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
            const unique_id = uuid();
            const newTask = {
                id: unique_id,
                title: title,
                description: description,
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

        case UPDATE_TASK:
            let updateList = [...state.tasks]
            const idx = updateList.indexOf(action.task)
            console.log("idx", idx)
            if (idx !== -1) {
                updateList[idx].description = action.updatedDescription
                console.log("updateList", updateList)
                return {
                    ...state,
                    tasks: updateList,
                }
            } else {
                return {
                    ...state
                }
            };

        default:
            return state;
        }
    };
