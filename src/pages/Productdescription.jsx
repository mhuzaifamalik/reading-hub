import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Img from "../images/shirt-2.png";
import { useNavigate } from "react-router-dom";
import { Row, Col, Tabs } from "antd";

const { TabPane } = Tabs;

function Productdescription() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/CheckOutn"); // ✅ fixed typo in your path
    };

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div>
            <section className="productsDescription">
                <div className="bg-black min-h-screen pb-40 pt-20">
                    <section className="main-product-page">
                        <div className="container mx-auto p-10">
                            <Row gutter={[16, 16]} justify="center" align="middle">
                                {/* Product Image */}
                                <Col span={12} style={{ textAlign: "center" }}>
                                    <div className="main-product-slide p-[50px] bg-gray-900 mx-auto flex justify-center rounded-2xl shadow-lg">
                                        <img className="mx-auto block" src={Img} alt="Product" />
                                    </div>
                                </Col>

                                {/* Product Info */}
                                <Col span={12}> <div className="main-product-desciption text-white "> <div className="product-dce-title"> <h1 className="font-unbounded text-4xl font-bold bg-[#FFA900] bg-clip-text text-transparent m-auto w-full max-w-[900px]">Dry Oil</h1> <p className="font-outfit text-gray-300 mb-6 font-outfit text-lg pt-2 border-b border-white pb-2"> 2oz Dry Oil Body Spray Perfume Oil Fragrance Oil Cologne Oils 2oz 60ml </p> </div> <p className="font-outfit text-1xl p-1 ">This Offer Is For 1 Item Only!</p> <p className="font-outfit text-1xl p-1">Leave Your Fragrance Choice At Checkout</p> <p className="font-outfit text-1xl p-1">Under "NOTE TO BLUE WATER FRAGRANCES"</p> <p className="font-outfit text-1xl p-1 pb-5"> Fragrance shopping at BLUE WATER FRAGRANCES is special & unique in the following ways!! </p> <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base font-outfit"> <ul className="space-y-3 list-disc list-inside pb-5"> <li className="font-outfit text-1xl p-1">We offer Over 1800 Fragrance Items</li> <li className="font-outfit text-1xl p-1">Over 300 FRAGRANCES</li> <li className="font-outfit text-1xl p-1">Over 200 DESIGNER INSPIRED SCENTS</li> <li className="font-outfit text-1xl p-1">17 Different Fragrance Categories</li> <li className="font-outfit text-1xl p-1">FAST & FREE USA SHIPPING</li> </ul> <ul className="space-y-3 list-disc list-inside"> <li className="font-outfit">17 Years in Business</li> <li className="font-outfit">10 Years on ETSY.COM</li> <li className="font-outfit">OVER 16000 ETSY SALES</li> <li className="font-outfit">5 STAR RATED – HIGH CUSTOMER SATISFACTION</li> </ul> </div> <div className="pricing-section pt-5 pb-5"> <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"> <div className="text-4xl font-bold text-white-400 font-unbounded"> $28.99 </div> <div className="flex flex-col"> {/* Stars + label */} <div className="flex items-center gap-3"> <div className="flex text-yellow-400 text-2xl"> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div> <span className="font-outfit text-lg font-medium"> 5 Star Reviews </span> </div> {/* Avatars + label */} <div className="flex items-center gap-3 mt-3"> <div className="flex -space-x-2"> <img src="https://i.pravatar.cc/40?img=1" alt="User 1" className="w-10 h-10 rounded-full border-2 border-black" /> <img src="https://i.pravatar.cc/40?img=2" alt="User 2" className="w-10 h-10 rounded-full border-2 border-black" /> <img src="https://i.pravatar.cc/40?img=3" alt="User 3" className="w-10 h-10 rounded-full border-2 border-black" /> <img src="https://i.pravatar.cc/40?img=4" alt="User 4" className="w-10 h-10 rounded-full border-2 border-black" /> </div> <span className="font-unbounded text-lg font-medium"> +10 Customer Reviews </span> </div> </div> </div> </div> <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"> <li className="flex"> <button className="font-unbounded add-to-cart-btn flex items-center gap-5 bg-[#FFA900] text-white px-6 py-3 rounded-full hover:bg-white-700 transition" onClick={handleGoHome}> <IoCartOutline /> Add to Cart </button> </li> <li className="flex justify-center items-center"> <div className="flex items-center border border-white rounded-full px-6 py-2"> <button onClick={decrease} className="text-white text-xl px-2 ">-</button> <span className="text-white text-lg px-4 font-syn">{quantity}</span> <button onClick={increase} className="text-white text-xl px-2">+</button> </div> </li> </ul> </div> </Col>
                            </Row>
                            <Row>
                                <Col span={24} className="mt-10">
                                    <Tabs
                                        defaultActiveKey="1"
                                        className="custom-tabs bg-gray-900 p-6 rounded-xl"
                                    >
                                        <TabPane
                                            tab={<span className="text-white font-outfit">Description</span>}
                                            key="1"
                                        >
                                            <p className="font-outfit text-white text-lg leading-relaxed">
                                                This Offer Is For 1 Item Only! Leave Your Fragrance Choice At Checkout
                                                under "NOTE TO BLUE WATER FRAGRANCES".
                                            </p>
                                            <ul className="list-disc list-inside text-white space-y-2 mt-4">
                                                <li>We offer Over 1800 Fragrance Items</li>
                                                <li>Over 300 Fragrances</li>
                                                <li>Over 200 Designer Inspired Scents</li>
                                                <li>17 Different Fragrance Categories</li>
                                                <li>FAST & FREE USA Shipping</li>
                                            </ul>
                                        </TabPane>

                                        <TabPane
                                            tab={<span className="text-white font-outfit">Reviews</span>}
                                            key="2"
                                        >
                                            <p className="text-white font-outfit text-lg">⭐ Customer Feedback</p>
                                            <ul className="space-y-3 mt-4">
                                                <li className="text-gray-300">
                                                    "Amazing fragrance! Long lasting." – John
                                                </li>
                                                <li className="text-gray-300">
                                                    "Best perfume oil I’ve purchased!" – Sarah
                                                </li>
                                                <li className="text-gray-300">
                                                    "Fast shipping and smells great." – Emily
                                                </li>
                                            </ul>
                                        </TabPane>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Productdescription;
