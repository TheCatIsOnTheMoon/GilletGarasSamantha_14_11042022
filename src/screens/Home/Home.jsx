import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//
import DatePicker from 'react-date-picker';
//
import people from '../../icons/people.svg';
//
import { states } from '../../data/statesList';
import { departments } from '../../data/departmentsList';
//
import { data } from '../../data/mockedData';

function Home() {
  const [value, onChange] = useState(new Date());

  const dispatch = useDispatch();

  function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    const newEmployee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };

    console.log(newEmployee);
  }

  // const employees = useSelector((state) => state.employees);
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  //   control,
  // } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

  // const onSubmitForm = (data) => {
  //   data.id = employees.length + 1;
  //   data.dateOfBirth = getDate(data.dateOfBirth);
  //   data.startDate = getDate(data.startDate);
  //   //add new employee to state
  //   dispatch(employeeAdded(data));
  //   //open modal confirmation
  //   setIsOpen(1);
  // };
  // const doAddNewEmployee = () => {
  //   setIsOpen(0);
  //   reset();
  // };

  // state list
  let statesList =
    states.length > 0 &&
    states.map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      );
    });

  // state list
  let departmentsList =
    departments.length > 0 &&
    departments.map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      );
    });

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container glass-effect">
        <Link to={'/employee-list'}>
          <img src={people} alt="people icon" id="people-icon" />
          View Current Employees
        </Link>
        <div className="line"></div>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            onChange={onChange}
            value={value}
            format=" M / d / y "
            calendarIcon={null}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            onChange={onChange}
            value={value}
            format=" M / d / y "
            calendarIcon={null}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {statesList}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            {departmentsList}
          </select>
        </form>

        <button onClick={saveEmployee} id="save-btn" className="button">
          Save
        </button>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </>
  );
}

export default Home;
