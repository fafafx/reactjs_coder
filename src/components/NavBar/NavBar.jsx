import { Link } from 'react-router-dom';
function NavBar() {
  return (<>
    
    <div className="container">
    <hr></hr>
      <nav className="text-center">
        <ul className="mainNavBarItem">
          <li>
            <Link to="/" className="">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/category/gatitos" className="">
              Alimento para Gatitos
            </Link>
          </li>
          <li>
            <Link to="/category/salud" className="">
              Alimentos Medicinales
            </Link>
          </li>
        </ul>
      </nav>
    </div></>
  );
}

export default NavBar;
