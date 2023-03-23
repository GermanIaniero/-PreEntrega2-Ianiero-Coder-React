/*import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

const Notebook = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/Products/?Categoria=NTB') //pido los datos
      .then((res) => res.json()) //lo traduzco
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        
      <ItemList prods={prods} />
      <Link to='/'>Volver al Home</Link>
    </>
  );
};

export default Notebook;*/






import {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import {unicoProducto} from './components/AllProducto'

function Producto() {
  const[producto,setProducto]=useState(null)


    const params = useParams()

    useEffect(()=>{
     unicoProducto(params.id, setProducto)
    }, [params.id])
  return (
    <> 
    {producto != null ?(
        <div>
    <h1>Producto con el id {params.id}</h1>
    <p> Categoria: <b>{producto.Categoria}</b> </p>
    <img src={producto.img} alt="imagen"/>
    <p> Descripción: <b>{producto.Descrip}</b> </p>
    <p> Modelo: <b>{producto.Modelo}</b> </p>
    <p> Precio: <b>{producto.Precio}</b> </p>

     </div> 
  ) : ('No hay productos')}

    </>
  )
}

export default Producto;