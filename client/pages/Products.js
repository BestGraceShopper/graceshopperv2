import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios('/api/products');
    setProducts(result.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('products', products);
  return (
    <div>
      Products:
      <ul>
        {products.map(product => {
          return <li key={product.name}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
