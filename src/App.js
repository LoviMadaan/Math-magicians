import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
