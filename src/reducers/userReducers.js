import { ADD_NEW_EMPLOYEE } from '../constants/reduxConstants';

// UPDATE
export const addNewEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };

    default:
      return state;
  }
};
