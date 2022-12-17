import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home/Home';
import TablesDetails from './pages/TablesDetails/TablesDetails';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details:id' element={<TablesDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
