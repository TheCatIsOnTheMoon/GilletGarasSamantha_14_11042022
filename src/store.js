import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { data } from './data/mockedData';
import { addNewEmployeeReducer } from './reducers/userReducers';

const reducer = addNewEmployeeReducer;

const initialState = {
  employees: data,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
