import React from 'react';
import {posts} from './posts';

const ProductAlerts = ({ post, notify }) => {
  let productAlerts;

  if (post.price > 700) {
    productAlerts = <p>
      <button onClick={notify}>Notify Me</button>
    </p>;
  }

  return <div className="product-alerts">{productAlerts}</div>
};

export default ProductAlerts;