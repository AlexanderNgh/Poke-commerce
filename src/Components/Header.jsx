import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div className="headerDiv">
        <div>
          <h2>UNOVA POKEMART</h2>
        </div>
        <div className="navButtons">
          <Link to="/home" className="navLink">
            <div className="navBtn">
              <h2>Home</h2>
            </div>
          </Link>
          <Link to="/shop" className="navLink">
            <div className="navBtn">
              <h2>Shop</h2>
            </div>
          </Link>
          <Link to="/cart" className="navLink">
            <div className="navBtn">
              <h2>Cart</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
