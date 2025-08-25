import React from 'react'
import { Row, Col } from 'antd';
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from '../images/bloginggroup/1.png'
import img2 from '../images/bloginggroup/2.png'
import img3 from '../images/bloginggroup/3.png'

function blogingsec() {
    return (
        <div>
            <section className="blog-mission">
                <div className="container">
                    <Row align={'middle'} gutter={(50 , 50)}>
                        <Col span={8}>

                            <div className="custom-ard">
                                <img src={img1} alt="img" />|
                                <h2>drama</h2>
                                <span><strong>Life's rawest moments, unfiltered</strong></span>
                                <p>Drama invites you into emotional landscapes filled with depth, conflict, and transformation. These are stories that linger — rich with layered characters and meaningful stakes.</p>
                                <button>Explore Drama Stories <FaLongArrowAltRight /></button>

                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="custom-ard">
                                <img src={img3}  alt="img" />|
                                <h2>Humor</h2>
                                <span><strong>For the loud laughers and quiet chucklers</strong></span>
                                <p>Brighten your day with quick wit, quirky characters, and satirical takes. Our humor genre brings you everything from lighthearted chuckles to sharp comedic fiction.</p>
                                <button>Explore Drama Stories <FaLongArrowAltRight /></button>

                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="custom-ard">
                                <img src={img2} alt="img" />|
                                <h2>Thrillers</h2>
                                <span><strong>Pulse-pounding fiction, page after page</strong></span>
                                <p>Step into worlds of mystery, danger, and suspense. These thrillers are written to keep you on edge — perfect for late nights and locked doors.</p>
                                <button>Explore Drama Stories <FaLongArrowAltRight /></button>

                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
        </div>
    )
}

export default blogingsec
