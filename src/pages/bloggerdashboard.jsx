import React from "react";
import { Row, Col } from "antd";

import Img from "../images/profile.jpg"
import { BsPencil } from "react-icons/bs";
import Bloging from "../components/bloging"
import { FaSearch } from "react-icons/fa";
function bloggerdashboard() {
    return (
        <>
            <div className="bg-[#111] text-white mx-auto rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row p-6">
                <div className="container">
                    <Row gutter={15} align="middle">
                        <Col span="12">
                            <img className="w-[100%] h-[600px] object-contain" src={Img} alt="" />
                        </Col>
                        <Col span="12">
                            <div className="text-profiletext">
                                <div className="main-edite-sign">
                                    <BsPencil />
                                </div>
                                <h2>Emma William</h2>
                                <p>Emma William is a passionate storyteller and film critic specializing in drama and romance genres. With over a decade of experience in reviewing and analyzing films, she brings a deep understanding of narrative structure and emotional storytelling.</p>

                                <h4>Why Drama Resonates With Everyone</h4>
                                <p>Drama is more than just a genre; it’s an emotional connection. From heartbreak to triumph, it offers narratives that feel deeply personal yet universally relatable. Whether it’s a tear-jerking climax or a quiet moment of reflection, drama stories allow us to live through experiences we might never encounter in real life.</p>
                                <h4>Stories That Have Defined the Genre</h4>
                                <p>From historical epics like Schindler’s List to contemporary masterpieces such as Marriage Story, dramas have shaped cinema and literature in unforgettable ways. Each story invites the audience to see the world through a different lens, sparking empathy and introspection.</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div className="search-bar flex items-center justify-center w-full my-6">
                            <div className="flex items-center w-[1000px] h-[50px] border border-gray-400 rounded-full overflow-hidden">
                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Search"
                                className="flex-grow px-4 bg-black text-white outline-none placeholder-gray-400 placeholder:font-[Outfit] placeholder:text-sm"
                                />

                                {/* Search Button */}
                                <button className="bg-[#FFA900] flex items-center justify-center w-10 h-10 rounded-full mr-2">
                                 <FaSearch />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
             <Bloging className="blogging-text-span" />
        </>
    );
}

export default bloggerdashboard;
