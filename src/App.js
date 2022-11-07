import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import ShowTable from './components/ShowTable/ShowTable';
import AddOperator from './components/AddOperator/AddOperator';
import Error404 from './components/Error404/Error404';
import "@arborknot/design-system-v2/dist/bundle.css";
import "@arborknot/design-system-v2/dist/components.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={< ShowTable />} />
          <Route path="/showtable" element={< ShowTable />} />
          <Route path="/addoperator" element={< AddOperator />} />



          <Route path="/error404" element={< Error404 />} />
          <Route path="*" element={<Navigate to="/error404" replace />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
