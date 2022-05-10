import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screens
import Home from '../screens/Home/Home';
import EmployeeList from '../components/EmployeeList/EmployeeList';

/**
 * The AppRouter function returns a Router component
 * that contains the differents Routes and paths of the App.
 * @component
 * @returns A router component.
 *
 */
function AppRouter() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
