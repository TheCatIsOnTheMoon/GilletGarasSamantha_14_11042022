import { Link, useNavigate } from 'react-router-dom';

function EmployeeList() {
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>
      <table id="employee-table" class="display"></table>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;

// $(function () {
//   const employees = JSON.parse(localStorage.getItem('employees'));

//   $('#employee-table').DataTable({
//     data: employees,
//     columns: [
//       { title: 'First Name', data: 'firstName' },
//       { title: 'Last Name', data: 'lastName' },
//       { title: 'Start Date', data: 'startDate' },
//       { title: 'Department', data: 'department' },
//       { title: 'Date of Birth', data: 'dateOfBirth' },
//       { title: 'Street', data: 'street' },
//       { title: 'City', data: 'city' },
//       { title: 'State', data: 'state' },
//       { title: 'Zip Code', data: 'zipCode' },
//     ],
//   });
// });
