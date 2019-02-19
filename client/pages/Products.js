import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import penniesToDollars from '../utils/productUtils';

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
            <Card bg="light" style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                style={{ height: '15rem' }}
                src={product.imageUrl}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Price: ${`${penniesToDollars(product.price)}`}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
