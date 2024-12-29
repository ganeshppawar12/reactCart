import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Total: ${totalCost.toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition duration-200"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
