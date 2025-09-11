import React from 'react'
import { useNavigate } from "react-router-dom";

function ConfirmCheck() {
        const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/Thankyou"); // Redirects to Home page
    };
    const orderSummary = {
        items: 2,
        price: 50.98,
        discount: 0,
        shipping: 5.0,
        total: 55.98,
    };

    const personalInfo = {
        name: "Alex Wilson",
        email: "Alexwilson30@outlook.com",
        phone: "+123 456 7890",
    };

    const deliveryAddress = {
        address: "123 Wilson Crescent Avenue, Oak Street Springfield, IL 62701 United States",
    };

    const paymentInfo = {
        cardType: "MasterCard",
        cardNumber: "**** **** **** 1234",
        cardLogo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    };
  return (
    <div>
        <div className="min-h-screen bg-black p-8 text-white font-outfit">
                <h1 className="text-3xl md:text-4xl font-syne mb-6 text-white-400" >
                    Confirm & Submit Order
                </h1>

                <p className="text-gray-400 mb-8">Delivery & Payment:</p>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Personal Info + Delivery + Payment */}
                    <div className="flex-1 bg-[#111111] p-6 rounded-xl shadow-md space-y-6">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-syne text-lg mb-2">Personal Information:</h2>
                                <p>{personalInfo.name}</p>
                                <p>{personalInfo.email}</p>
                                <p>{personalInfo.phone}</p>
                            </div>
                            <div>
                                <h2 className="font-syne text-lg mb-2">Delivery Address:</h2>
                                <p>{deliveryAddress.address}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="font-syne text-lg mb-2">Payment Card:</h2>
                                <img src={paymentInfo.cardLogo} alt={paymentInfo.cardType} className="h-6" />
                            </div>
                            <div>
                                <h2 className="font-syne text-lg mb-2">Card Number:</h2>
                                <p>{paymentInfo.cardNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full md:w-1/3 bg-[#111111] p-6 rounded-xl shadow-md flex flex-col justify-between">
                        <div>
                            <h2 className="font-syne text-xl text-blue-400 mb-6">Order Summary</h2>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex justify-between">
                                    <span>No of Items:</span>
                                    <span>{orderSummary.items}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Price:</span>
                                    <span>${orderSummary.price.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount:</span>
                                    <span>${orderSummary.discount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span>${orderSummary.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold mt-4 text-white">
                                    <span>Total:</span>
                                    <span>${orderSummary.total.toFixed(2)}</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                                Local taxes included (where applicable) <br />
                                * Additional duties and taxes may apply
                            </p>
                        </div>

                        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold py-3 rounded-lg" onClick={handleGoHome}>
                            Confirm Order
                        </button>

                        <p className="text-xs text-gray-500 mt-2 text-center">
                            By clicking on confirm order, you agree to JAZON{" "}
                            <a href="#" className="underline">
                                Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ConfirmCheck
