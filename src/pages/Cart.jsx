import React, {useState} from 'react'
import Img from "../images/shirt-1.png"; // Import your image here

import { useNavigate } from "react-router-dom";



const cartItemsData = [
  {
    id: 1,
    name: "YOU PICK The SCENT",
    description: "2oz Dry Oil Body Spray Perfume Oil Fragrance Oil Cologne Oils 2oz 60ml",
    price: 28.99,
    image: Img, // Fixed the image reference
    quantity: 1,
  },
  {
    id: 2,
    name: "OLD SPICE CLASSIC",
    description: "Type Dry Oil Body Spray Men Cologne Oil Fragrance Oils 1oz 30ml",
    price: 21.99,
    image: Img, // Fixed the image reference
    quantity: 1,
  },
];

function Cart() {
    const navigate = useNavigate();
const handleGoProduct = () => {
    navigate("/ProductPage"); // Redirects to Home page
  };
  const handleGoHome = () => {
    navigate("/CheckoutPage"); // Redirects to Home page
  };
  const [cartItems, setCartItems] = useState(cartItemsData);

  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
             <div className="">

        </div>
    <div className="min-h-screen bg-black text-white font-outfit py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-syne font-bold mb-10 text-center md:text-left">
          Your Cart <span className="text-gray-400">({cartItems.length})</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-900 rounded-xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl shadow-lg"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="font-syne text-xl md:text-2xl font-bold mb-1">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <p className="text-lg font-bold mt-2 text-[#FFA900]">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 mt-6 md:mt-0">
                  <div className="flex items-center border border-gray-700 rounded-full">
                    <button
                      className="text-2xl px-3 py-1 text-gray-400 hover:text-white transition-colors"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="px-3 text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="text-2xl px-3 py-1 text-gray-400 hover:text-white transition-colors"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold text-lg md:text-xl">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="text-sm text-red-500 hover:text-red-400 underline transition-colors hidden md:block"
                    onClick={() => removeItem(item.id)}q
                  >
                    Remove
                  </button>
                </div>
                <button
                  className="text-sm text-red-500 hover:text-red-400 underline mt-4 md:hidden"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-bold">
              Subtotal: <span className="text-2xl text-[#FFA900]">${total.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-0 w-full md:w-auto">
              <button  onClick={handleGoProduct} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Browse More
              </button>
              <button 
              onClick={handleGoHome}
                className="w-full sm:w-auto text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
                style={{
            backgroundColor: "#FFA900"
                
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        body {
          background-color: #0a0a0a;
          margin: 0;
          padding: 0;
          font-family: 'Outfit', sans-serif;
        }
        
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        
        .bg-black {
          background-color: #0a0a0a;
        }
        
        .bg-gray-900 {
          background-color: #111827;
        }
      `}</style>
    </div>
    </div>
  )
}

export default Cart
