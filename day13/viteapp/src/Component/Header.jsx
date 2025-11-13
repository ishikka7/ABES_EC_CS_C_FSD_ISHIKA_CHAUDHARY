import { Link } from 'react-router-dom';
import './Header.css';
import Search from './Search';

const Header = ({ searchHandler }) => {
  return (
    <div className="header">
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>

        {/* Search in header */}
        <Search searchHandler={searchHandler} />
      </nav>
    </div>
  );
};

export default Header;
