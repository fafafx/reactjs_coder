import React from 'react';
import QuantityControl from '../QuantityControl/QuantityControl';
import { Link } from 'react-router-dom';
function ItemDetail({ product }) {
  return (
    <>
      <div className="card mb-3 container mx-auto paddingDetail">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.imgURL}
              className="img-fluid rounded-start "
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body p-5">
              <h2 className="card-title">{product.name}</h2>
              <h2 className="card-title precioNormal">${product.price}</h2>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <small className="text-muted p-1 ">
                  Stock disponible: {product.stock}.
                </small>
              </p>
              <p>
                Cantidad: <QuantityControl />{' '}
              </p>

              <button className="btn btn-primary btnCart" type="button">
                Agregar al carro
              </button>
              <Link to="/" className="">
                <button className="btn btn-primary btnCart mt-3" type="button">
                  Volver al catálogo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
