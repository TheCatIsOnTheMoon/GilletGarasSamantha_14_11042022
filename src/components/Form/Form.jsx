import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// packages
import Modal from 'react-modal-sgg';
import Calendar from 'react-select-date';
// img
import iconCalendar from './icon_calendar.svg';
// action redux
import { addNewEmployee } from '../../actions/employeeActions';
// data
import { states } from '../../data/statesList';
import { departments } from '../../data/departmentsList';
// components
import DropdownList from '../DropdownList/DropdownList';

/* Getting the current date and formatting it to be used in the calendar. */
const currentDate =
  new Date().getFullYear() +
  '-' +
  (new Date().getMonth() + 1) +
  '-' +
  new Date().getDate();

/**
 * calendar utility
 * @param {Number} num number
 * @returns number if length 1 returns with zero
 */
function addZero(num) {
  return num > 9 ? num : '0' + num;
}

function Form() {
  // calendar states
  const [showcld_dateOfBirth, setShowcld_dateOfBirth] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showcld_datestart, setShowcld_datestart] = useState(false);
  const [datestart, setDateStart] = useState(new Date());
  // modal states
  const [showModal, setShowModal] = useState(false);

  //modal use
  const hideModal = () => showModal && setShowModal(false);

  // redux utilities
  const data = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  function submitNewEmployee(data) {
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
      id: data.length + 1,
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

    //add new employee to store
    dispatch(addNewEmployee(newEmployee));
    returnToTop();
    return setShowModal(true);
  }

  /**
   * When the user clicks the button, scroll to the top of the page.
   */
  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="container border-radius box-shadow">
        <h2>
          Create <strong>New Employee</strong>
        </h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <div className="calendar-input">
            <div
              className="position-relative"
              onClick={() => setShowcld_dateOfBirth(!showcld_dateOfBirth)}
            >
              <input
                readOnly
                value={
                  addZero(dateOfBirth?.getDate()) +
                  '-' +
                  addZero(dateOfBirth?.getMonth()) +
                  '-' +
                  dateOfBirth?.getFullYear()
                }
                id="date-of-birth"
              />
              <img
                src={iconCalendar}
                alt="calendar icon"
                className="icon calendar-icon"
              />
            </div>
            <div
              className={`${
                !showcld_dateOfBirth && 'display-none'
              } calendar-modal`}
            >
              <Calendar
                defaultValue={{ date: currentDate }}
                showDateInputField={false}
                slotInfo={false}
                onSelect={(date) => setDateOfBirth(date)}
              />
            </div>
          </div>
          <label htmlFor="start-date">Start Date</label>
          <div className="calendar-input">
            <div
              className="position-relative"
              onClick={() => setShowcld_datestart(!showcld_datestart)}
            >
              <input
                readOnly
                value={
                  addZero(datestart?.getDate()) +
                  '-' +
                  addZero(datestart?.getMonth()) +
                  '-' +
                  datestart?.getFullYear()
                }
                id="start-date"
              />
              <img
                src={iconCalendar}
                alt="calendar icon"
                className="icon calendar-icon"
              />
            </div>
            <div
              className={`${
                !showcld_datestart && 'display-none'
              } calendar-modal`}
            >
              <Calendar
                defaultValue={{ date: currentDate }}
                showDateInputField={false}
                slotInfo={false}
                onSelect={(date) => setDateStart(date)}
              />
            </div>
          </div>
          <fieldset>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <DropdownList list={states} listId="state" />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <DropdownList list={departments} listId="department" />
        </form>

        <button
          onClick={() => {
            submitNewEmployee(data);
          }}
          className="button"
        >
          Save
        </button>
      </div>
      <Modal
        id="confirmation"
        className="modal"
        show={showModal}
        onClickCloseBtn={hideModal}
      >
        <h3>
          New <strong>Employee</strong> Created!
        </h3>
      </Modal>
    </>
  );
}

export default Form;
