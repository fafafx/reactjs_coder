import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

function Item({ product }) {
  let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="col">
      <div className="card h-100">
        <div className="favorite">
          <FontAwesomeIcon icon="fa-solid fa-heart" />
        </div>
        <img
          src={product.imgURL}
          className="cardImgTop pPadding zoom"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title titulo mt-2">{product.name}</h5>
          <hr></hr>
          <p className="card-text p-2">{product.description}</p>
        </div>
        <div className="card-footer text-center">
          <div>
            <h3 className="precioNormal">${product.price}</h3>
          </div>

          <Link to={urlDetail}>
            <Button>Ver detalle</Button>
          </Link>
          <small className="text-muted text-center mb-2 ">
            Stock Disponible: {product.stock}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Item;
