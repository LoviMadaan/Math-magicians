import { Link, Routes, Route } from 'react-router-dom';
import './header.css';
import ReCalculator from '../calculator/calculator';
import CalQuotes from '../quotes/quotes';
import HomeCal from '../home/home';

const Header = () => (
  <>
    <nav>
      <h1>Math magicians</h1>
      <ul className="links-holder">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/calculator">Calculator</Link></li>
        <li className="link"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomeCal />} />
      <Route path="/calculator" element={<ReCalculator />} />
      <Route path="/quote" element={<CalQuotes />} />
    </Routes>
  </>
);

export default Header;
