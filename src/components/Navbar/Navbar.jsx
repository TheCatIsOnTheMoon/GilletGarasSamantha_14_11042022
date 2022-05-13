import { Link } from 'react-router-dom';
//
import employeeIcon from './icon_employee.svg';
import addEmployeeIcon from './icon_add_employee.svg';

function Navbar() {
  return (
    <div className="navbar box-shadow">
      <h1>HRnet</h1>
      <nav>
        <Link to={'/employee-list'}>
          <img
            src={employeeIcon}
            className="icon"
            id="icon-employee"
            alt="icon employee"
          />
          View Current Employees
        </Link>
        <Link to={'/'}>
          <img
            src={addEmployeeIcon}
            className="icon"
            id="icon-add-employee"
            alt="icon add employee"
          />
          Add New Employee
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
