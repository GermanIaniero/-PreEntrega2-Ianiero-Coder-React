import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    return (
 
            <div className="row" id="itemdetail">
                <div className="col-md-4 offset-md-4">
                    <img src={item.Img} className="img-fluid" alt={item.Descrip} />
                    <h1>{item.marca}</h1>
                    <p>{item.modelo}</p>
                    <p>{item.Descrip}</p>
                    <p>${item.precio} </p>
                    
                </div>
                <div>
                <ItemCount stockItems={10} />
                </div>
                
            </div>    
    )
 
}


export default ItemDetail;