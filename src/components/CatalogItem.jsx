import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QuantityControl from "./QuantityControl";
function CatalogItem(props) {
    function handleClick() {
       console.log("Agregaste el producto al carro");
      }
    return(
        <>
<div className="col">
                <div className="card h-100">
                    <div className="favorite"><FontAwesomeIcon icon="fa-solid fa-heart" /></div>
      <img src="/img/catalog/img000001.webp" className="cardImgTop pPadding" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.nombreProducto}</h5>
                        <p className="card-text">{props.descripcionProducto}</p>
              <h4 className="precioNormal text-center">${props.precioProducto}</h4>
              <hr></hr>
      </div><QuantityControl />
      <small className="text-muted text-center p-1">Stock Disponible: {props.stock}</small>
            <div className="card-footer text-center">
            <button className="btn btn-primary btnCart" type="button" onClick={handleClick}>Agregar al carro</button>
        
      </div>
    </div>
  </div>     
        </>
    )
}

export default CatalogItem;