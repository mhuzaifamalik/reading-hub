import React, { useState } from 'react'
import Img from "../images/shirt-1.png";
import { useNavigate } from "react-router-dom";
function CheckOut() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/ConfirmCheck"); // Redirects to Home page
    };
    const [paymentMethod, setPaymentMethod] = useState("card");
    return (
        <div>
            <section className="bg-black text-white min-h-screen px-6 py-12 font-outfit">
                <div className="container mx-auto grid lg:grid-cols-3 gap-10">

                    {/* Left Section - Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Billing Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#FFA900] mb-6 font-syne">
                                Fill Out The Details
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input className="p-3 rounded-full bg-black border border-gray-600 focus:outline-none focus:border-cyan-400" placeholder="Enter Your First Name" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Last Name" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Email Address" />
                                <div className="flex items-center border border-gray-600 rounded-full bg-black px-3">
                                    <input className="w-full bg-transparent p-2 focus:outline-none" placeholder="Enter Your Phone Number" />
                                </div>
                                <input className="col-span-2 p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Shipping Address" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Country" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your City" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your State" />
                                <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Postal Code" />
                                <textarea className="col-span-2 p-3 rounded-xl bg-black border border-gray-600 h-28 resize-none" placeholder="Enter Your Message"></textarea>
                            </form>
                        </div>

                        {/* Payment Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#FFA900] mb-6 font-syne">
                                Payment Information:
                            </h2>
                            <div className="flex gap-4 mb-6">
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    style={{
                                        backgroundColor: "#FACC15", // yellow-400
                                        color: "#000000"           // black
                                    }}
                                    className={`px-6 py-2 rounded-full font-syne ${paymentMethod === "card" ? " text-black" : "bg-white text-black"
                                        }`}
                                >
                                    Card
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "#FACC15", // yellow-400
                                        color: "#000000"           // black
                                    }}
                                    onClick={() => setPaymentMethod("cod")}
                                    className={`px-6 py-2 rounded-full font-syne ${paymentMethod === "cod" ? " text-black" : "bg-white text-black"
                                        }`}
                                >
                                    Cash On Delivery
                                </button>
                            </div>

                            {paymentMethod === "card" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <select className="p-3 rounded-full bg-black border border-gray-600">
                                        <option>MASTERCARD</option>
                                        <option>VISA</option>
                                        <option>AMEX</option>
                                    </select>
                                    <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Card Number" />
                                    <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your Expiration Date" />
                                    <input className="p-3 rounded-full bg-black border border-gray-600" placeholder="Enter Your CVV/CVC" />
                                </div>
                            )}

                            <div className="mt-8">
                                <button
                                    style={{
                                        backgroundColor: "#FACC15", // yellow-400
                                        color: "#000000"           // black
                                    }} className="px-8 py-3 bg-cyan-400 text-black rounded-full font-bold font-syne" onClick={handleGoHome}>
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div className="bg-black border border-gray-700 rounded-2xl p-6 space-y-6">
                        <h2 className="text-2xl font-bold text-[#FFA900] mb-6 font-syne">Order Summary</h2>

                        {/* Product List */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img src={Img} alt="Product" className="w-16 h-16 rounded-lg" />
                                <div>
                                    <p className="font-semibold font-outfit">YOU PICK The SCENT</p>
                                    <span className="text-sm text-gray-400">$48.99</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={Img} alt="Product" className="w-16 h-16 rounded-lg" />
                                <div>
                                    <p className="font-semibold font-outfit">OLD SPICE CLASSIC</p>
                                    <span className="text-sm text-gray-400">$12.99</span>
                                </div>
                            </div>
                        </div>

                        {/* Price Details */}
                        <div className="text-gray-300 space-y-2 text-sm font-outfit">
                            <div className="flex justify-between"><span>Price:</span><span>$60.98</span></div>
                            <div className="flex justify-between  font-outfit text-lg pt-2 border-b border-white pb-2"><span>Discount:</span><span>$0.00</span></div>
                            <div className="flex justify-between"><span>Shipping:</span><span>$5.00</span></div>
                            <div className="flex justify-between font-bold text-white ont-outfit text-lg pt-2 border-b border-white pb-2"><span>Total:</span><span>$65.98</span></div>
                            <div className="flex justify-between"><span>ETA:</span><span>24 Sept 2025</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckOut
