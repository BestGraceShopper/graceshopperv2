import React, { useEffect, useState } from 'react';
import axios from 'axios';
import penniesToDollars from '../utils/productUtils';
import SingleProduct from '../components/SingleProduct';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios('/api/products');
    setProducts(result.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="product-page">
      {products.map(product => {
        return (
          <div key={product.id} className="product-card">
            <SingleProduct
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
