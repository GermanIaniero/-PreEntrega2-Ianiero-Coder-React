import React from 'react';

const Item = ({ prod }) => {
  return (
    <div className="card" >
      
     <div className="card-body">
        <img src={prod.Img} className="card-img-top" alt="..." />
        <div>  
          <h5 className="card-title">{prod.Marca}</h5>
          <p className="card-text">{prod.Modelo}</p>
          <p className="card-text">{prod.descrip}</p>

          <p className="card-text2">${prod.Precio}</p>
          <a href="." className="button">
              Agregar Carrito🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;