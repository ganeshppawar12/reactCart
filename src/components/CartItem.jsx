import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1 ml-4">
        <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="px-2 py-1 bg-gray-300 rounded-l-md hover:bg-gray-400 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-200">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 bg-gray-300 rounded-r-md hover:bg-gray-400 transition duration-200"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
