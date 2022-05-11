import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

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

// filter
const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

function EmployeeList() {
  const [filterText, setFilterText] = useState('');
  const [resetPagination, setResetPagination] = useState(false);

  // get data from store
  const data = useSelector((state) => state.employees);

  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPagination(!resetPagination);
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
  }, [filterText, resetPagination]);

  return (
    <div id="employee-div" className="container border-radius box-shadow">
      <h2>
        Current <strong>Employees</strong>{' '}
      </h2>

      <div className="table">
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationResetDefaultPage={resetPagination}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </div>

      <Link to="/" className="button">
        Home
      </Link>
    </div>
  );
}

export default EmployeeList;
