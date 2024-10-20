import React from 'react';

const CartItem = ({ item, onAddToCart }) => {
  return (
    <div className="cart-item p-2 border border-gray-300 rounded-lg shadow-md flex flex-col items-center mb-2">
      <img src={item.imageUrl} alt={item.name} className="w-24 h-28 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <p className="text-black mb-2">Price: N{item.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => onAddToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartItem;
