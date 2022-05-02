import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

// styled components
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// construction table
const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

// data
// const employees = JSON.parse(localStorage.getItem('employees'));

const data = [
  {
    id: 1,
    firstName: 'Marie',
    lastName: 'Durand',
    startDate: '1988',
    department: 'Sales',
    dateOfBirth: '06/07/1960',
    street: 'the street',
    city: 'thatcity',
    state: 'state of freedom',
    zipCode: '4242',
  },
  {
    id: 2,
    firstName: 'Frank',
    lastName: 'Miller',
    startDate: '1992',
    department: 'Sales',
    dateOfBirth: '06/07/1965',
    street: 'other street',
    city: 'thatothercity',
    state: 'state',
    zipCode: '1234',
  },
];

// filter
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

function EmployeeList() {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div id="employee-div" className="container_table">
      <h1>Current Employees</h1>
      {/* <table id="employee-table" class="display"></table> */}

      <div className="table">
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </div>

      <Link to="/" className="link_home glass-effect">
        Home
      </Link>
    </div>
  );
}

export default EmployeeList;
