import React from 'react';
import Item from './Item';
export const ItemList = ({ prods }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-aroud flex-wrap">
        {prods.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};