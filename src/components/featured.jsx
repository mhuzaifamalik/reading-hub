import React from 'react';
import { Row, Col, Rate } from 'antd';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from '../images/icons.png';
import featureimg from '../images/feature-image.png';
import testimonails from '../images/testimonails.png';

function Featured() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const textVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <div className="feature-banner">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <motion.div
                            className="feature-h2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span>Top-rated stories rising through the ranks</span>
                            <h2>Top featured Authors of the week</h2>
                        </motion.div>
                    </Col>
                </Row>

                <Slider {...settings}>
                    {[1, 2].map((_, i) => (
                        <div key={i}>
                            <Row align="middle">
                                <Col span={12}>
                                    <motion.div
                                        className="feature-content"
                                        variants={textVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <h5>Thriller</h5>
                                        <h2>Lara Whitman</h2>
                                        <p>
                                            A mysterious man shows up in a quiet town, bringing with him a string of unsolved disappearances. As secrets unravel, one woman must choose between loyalty and justice in this gripping psychological thriller that questions how well we truly know ...
                                        </p>
                                        <div className="meta">
                                            <img src={icon} alt="icon" />
                                            <h4>Published 3 days ago</h4>
                                        </div>
                                        <ul>
                                            <li><img src={testimonails} alt="author" /></li>
                                            <li>
                                                <span className="first-span">Lara Whitman</span>
                                                <span className="second-span">Crime Novelist</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                    <div className="rating">
                                        <ul>
                                            <li><Rate disabled defaultValue={5} /></li>
                                            <li><span className="textspan">(4.8 / 5 – 320 ratings)</span></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <motion.div
                                        className="main-feature-img"
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <img src={featureimg} alt="feature" />
                                    </motion.div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Featured;
