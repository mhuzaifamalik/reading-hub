import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';

function Banner({image,title,tagline,desc}) {
    return (
        <motion.div
            className="banner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container">
                <Row gutter={16}>
                    <Col span={24}>
                        <motion.div
                            className="banner-section"
                            style={{backgroundImage: `url(${image})`}}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <motion.div
                                className="main-content-banner"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    {tagline}
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                >
                                    {title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.4, duration: 0.6 }}
                                >
                                    {desc}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </motion.div>
    );
}

export default Banner;
