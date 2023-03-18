import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/Products') //pido los datos
      .then((res) => res.json()) //lo traduzco
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemList prods={prods} />
    </>
  );
};

export default ItemListContainer;
