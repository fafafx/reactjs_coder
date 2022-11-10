import React from 'react';
import Item from '../Item/Item';

function ItemList(props) {
  return (
    <>
      <h3 className="text-center p-5">{props.greetingCatalog}</h3>
      <div className="row row-cols-1 row-cols-md-5 g-3 mb-5">
        {props.productsList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default ItemList;
