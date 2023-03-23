import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (

        <Link to={"/item/" + item.id} className="text-decoration-none" >
            <div className="container">
                <div className="card  border border-0">
                    <img src={item.Img} className="card-img-top" alt={item.descrip} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.Marca}</h5>
                        <p className="card-text">{item.Modelo}</p>
                        <p className="card-text ">${item.descrip} </p>
                      
                    </div>
                </div>
            </div>
         </Link>

    /*<div className="card" >
      
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
    </div>  */
  );
};

export default Item;