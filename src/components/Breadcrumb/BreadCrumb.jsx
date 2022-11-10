//en desarrollo.

import { Link } from 'react-router-dom';
function BreadCrumb(product) {
  let urlCategory = `/category/${product.id}`;
  return (
    <div className="container">
      <nav>
        <ul className="mainNavBarItem">
          <li>Tienda</li>
          <li>/</li>
          <li>
            <Link to={urlCategory} className="">
              Alimento para Gatitos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BreadCrumb;
