import StateOne from "./components/StateOne";
import Form from "./components/Form";
import TablePage from "./components/Table";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/StateOne" element={<StateOne/>} />
        <Route path="/Table" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
