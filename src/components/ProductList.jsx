import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg" },
  { id: 2, name: "Phone", price: 500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchAkrnp8NSjTBARNc3JcWkHhDZ4jA1P96FDntUEeG_esMDQUhKuvTw4SG19iT9FL4hQo&usqp=CAU" },
  { id: 3, name: "Headphones", price: 150, image: "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=" },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="py-10 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
