import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// packages
import DataTable from 'react-data-table-component';

/* Creating the table. */
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

// filter;
const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <input
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
      item.lastName &&
      item.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filteredData) {
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
          data={filteredData}
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
