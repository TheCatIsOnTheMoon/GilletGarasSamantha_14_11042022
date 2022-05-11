import {
  ADD_NEW_EMPLOYEE,
  ADD_NEW_EMPLOYEE_FAIL,
} from '../constants/employeeConstants';

export const addNewEmployee = (newEmployee) => async (dispatch) => {
  try {
    console.log('addNewEmployee params :', newEmployee);
    dispatch({ type: ADD_NEW_EMPLOYEE });

    dispatch({ type: ADD_NEW_EMPLOYEE, payload: newEmployee });
  } catch (error) {
    alert('Sorry, we are unable to add a new employee.');
    dispatch({
      type: ADD_NEW_EMPLOYEE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
