import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getItemsFromAPI, {
  getItemsFromAPIByCategory,
} from '../../mockService/mockService';

import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();

  /* undefined -> false /
  /* "string"  -> true */

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
      });
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      });
    }
  }, [categoryid]);

  return (
    
      <ItemList productsList={productsList} greetingCatalog="Hola! este es el listado de productos disponibles"/>
     
  );
}

export default ItemListContainer;
