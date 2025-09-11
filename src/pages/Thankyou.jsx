import React from 'react';
import { useNavigate } from "react-router-dom";

function Thankyou() {
 const navigate = useNavigate();

const handleGoHome = () => {
  navigate("/");

};
const handleGoProduct = () => {
    navigate("/ProductPage"); // Redirects to Home page
  };
  return (
    
    <div className="min-h-screen bg-black from-gray-900 to-gray-800 flex items-center justify-center p-4 font-syne relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 max-w-md w-full transition-transform duration-300 hover:scale-105">
        {/* Checkmark animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg
              className="w-24 h-24 text-yellow-400"
              viewBox="0 0 52 52"
              style={{
                animation: 'checkmark-scale 0.3s ease-in-out 0.9s both'
              }}
            >
              <circle
                className="stroke-current"
                cx="26"
                cy="26"
                r="25"
                fill="none"
                strokeWidth="2"
                style={{
                  strokeDasharray: 166,
                  strokeDashoffset: 166,
                  animation: 'stroke-checkmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards'
                }}
              />
              <path
                className="stroke-current"
                fill="none"
                strokeWidth="4"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                style={{
                  strokeDasharray: 48,
                  strokeDashoffset: 48,
                  animation: 'stroke-checkmark 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards'
                }}
              />
            </svg>
          </div>
        </div>

        {/* Title and message */}
        <h1 className="text-2xl font-bold  font-outfit text-yellow-400 mb-6 text-center font-syne">
          Thank You!
        </h1>
        <p className="text-gray-300 mb-8 text-center leading-relaxed">
          We appreciate your time and consideration. Your submission has been
          received and we'll be in touch soon.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleGoHome} className="px-6 py-3 font-outfit bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">
            Return Home
          </button>
          <button onClick={handleGoProduct} className="px-6 py-3  font-outfit bg-transparent border border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-colors duration-300">
            Continue Browsing
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/10 rounded-full"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/10 rounded-full"></div>
      </div>

      {/* Confetti elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-4 bg-yellow-400 opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `confetti 5s linear ${Math.random() * 2}s infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Thankyou;