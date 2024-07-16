import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import bag1 from './bag1.jpg';
import bag from './bag.jpg';
import bag3 from './bag3.webp';
import bag2 from './bag2.jpg';

const products = [
  {
    id: 1,
    title: 'ReBecca bags',
    description: 'Small 20L Premium Quality Waterproof Laptop Backpack/School Bag/College Bag (Blue)',
    img: bag1,
  },
  {
    id: 2,
    title: 'Fast Fassion bags',
    description: 'Casual Waterproof Laptop Backpack / Office Bag / School Bag / College Bag',
    discount: '25% OFF',
    img: bag,
  },
  {
    id: 3,
    title: 'Plexy bags',
    description: 'PLEXY Medium Waterproof School Bag/College Bag 30 L Laptop Backpack(Blue).',
    discount: '85% OFF',
    img: bag3,
  },
  {
    id: 4,
    title: 'Plexy bags',
    description: 'white-college-bags-sling-bag/College Bag 30 L Laptop Backpack(Blue).',
    discount: '15% OFF',
    img: bag2,
  },
];

function Product({ updateTotalQuantity }) {
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  useEffect(() => {
    updateTotalQuantity(quantities);
  }, [quantities, updateTotalQuantity]);

  const incrementQuantity = (index) => {
    setQuantities((prev) => {
      if (prev[index] < 10) {
        return prev.map((q, i) => (i === index ? q + 1 : q));
      } else {
        alert('Reached the maximum limit');
        return prev;
      }
    });
  };

  const decrementQuantity = (index) => {
    setQuantities((prev) => {
      if (prev[index] > 1) {
        return prev.map((q, i) => (i === index ? q - 1 : q));
      } else {
        alert('Reached the minimum limit');
        return prev;
      }
    });
  };

  return (
    <div className='d-flex flex-lg-row flex-column justify-content-center my-3 top-5'>
      {products.map((product, index) => (
        <div key={product.id} className='col-lg-3 col-12 d-flex justify-content-center mb-lg-3 mb-0'>
          <Card style={{ width: '20rem' }} className='p-4'>
            <Card.Img variant="top" src={product.img} className='img-fluid' />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className='text-secondary'>
                {product.discount && <span className='text-success fw-bold'>{product.discount} </span>}
                {product.description}
              </Card.Text>
              <div className='d-flex justify-content-center gap-2'>
                <Button variant="primary" className='fw-bold' onClick={() => decrementQuantity(index)}>-</Button>
                <Form.Control type="text" placeholder="0" className='w-25 text-center' value={quantities[index]} readOnly />
                <Button variant="primary" className='fw-bold' onClick={() => incrementQuantity(index)}>+</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Product;