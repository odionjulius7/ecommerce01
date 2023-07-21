import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card1 from './Card1';
import Checkout from './Checkout';
import Menu from './Menu';
import Copyright from './Copyright';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <>
      <Menu/>
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card1
            key={i}
            product={product}
            
            showViewButton={false}
            showRemoveProductButton={false}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
      </>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to='/shop'>Continue shopping</Link>
    </h2>
  );

  return (
    <
    >
      <div className='row'>
        
        <div className='col-md-4'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className='col-md-4'>
          <h2 className='mb-4'>Your cart summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div>
       
      </div>
      <Copyright />
    </>
  );
};

export default Cart;
