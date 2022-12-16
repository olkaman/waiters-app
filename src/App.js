import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Tables from './pages/Tables/Tables';
import TablesDetails from './pages/TablesDetails/TablesDetails';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Tables />} />
        <Route path='/details:id' element={<TablesDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
