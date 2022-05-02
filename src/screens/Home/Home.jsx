import { useState } from 'react';
import { Link } from 'react-router-dom';

//
import DatePicker from 'react-date-picker';

//
import people from '../../icons/people.svg';

function Home() {
  const [value, onChange] = useState(new Date());

  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];

  let statesList =
    states.length > 0 &&
    states.map((item, i) => {
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
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick="saveEmployee()" id="save-btn" className="button">
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

// $(function () {
//   const stateSelect = document.getElementById('state');
//   states.forEach(function (state) {
//     const option = document.createElement('option');
//     option.value = state.abbreviation;
//     option.text = state.name;
//     stateSelect.appendChild(option);
//   });

//   $('#department').selectmenu();
//   $('#state').selectmenu();

//   $('#date-of-birth').datetimepicker({
//     timepicker: false,
//     format: 'm/d/Y',
//   });
//   $('#start-date').datetimepicker({
//     timepicker: false,
//     format: 'm/d/Y',
//   });
// });

// function Home() {
//   const firstName = document.getElementById('first-name');
//   const lastName = document.getElementById('last-name');
//   const dateOfBirth = document.getElementById('date-of-birth');
//   const startDate = document.getElementById('start-date');
//   const department = document.getElementById('department');
//   const street = document.getElementById('street');
//   const city = document.getElementById('city');
//   const state = document.getElementById('state');
//   const zipCode = document.getElementById('zip-code');

//   const employees = JSON.parse(localStorage.getItem('employees')) || [];
//   const employee = {
//     firstName: firstName.value,
//     lastName: lastName.value,
//     dateOfBirth: dateOfBirth.value,
//     startDate: startDate.value,
//     department: department.value,
//     street: street.value,
//     city: city.value,
//     state: state.value,
//     zipCode: zipCode.value,
//   };
//   employees.push(employee);
//   localStorage.setItem('employees', JSON.stringify(employees));
//   // $('#confirmation').modal();
// }
