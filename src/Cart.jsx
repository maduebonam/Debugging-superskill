import React from 'react';

const Cart = ({ cartItems, total }) => {
  return (
    <div className="cart p-4 border-t border-gray-200 mt-4">
      <h2 className="text-2xl font-bold text-red-600 mb-3">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="text-xl font-semibold mb-4">
            <p>{item.name} - N{item.price} × {item.quantity} = N{item.price * item.quantity}</p>
          </div>
        ))
      )}
      <h3 className="text-2xl font-bold mt-3">Total: N{total}</h3>
    </div>
  );
};

export default Cart;
