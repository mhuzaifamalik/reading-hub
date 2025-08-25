import React from 'react';
import { Row, Col } from 'antd';
import { FaFacebook } from "react-icons/fa";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const fieldVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Form() {
    return (
        <div className="form">
            <div className="container">
                <Row gutter={25} align="middle">
                    <Col span={12}>
                        <motion.div
                            className="form-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            <h2>Let’s talk</h2>
                            <span><a href="/"><FaFacebook /> Join Our Community</a></span>
                        </motion.div>
                    </Col>
                    <Col span={12}>
                        <motion.div
                            className="contact-form"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <form>
                                <motion.div className="form-row" variants={containerVariants}>
                                    <motion.div className="form-group" variants={fieldVariants}>
                                        <label>First Name</label>
                                        <input type="text" placeholder="Enter Your First Name ..." />
                                    </motion.div>
                                    <motion.div className="form-group" variants={fieldVariants}>
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Enter Your Last Name ..." />
                                    </motion.div>
                                </motion.div>

                                <motion.div className="form-row" variants={containerVariants}>
                                    <motion.div className="form-group" variants={fieldVariants}>
                                        <label>Email Address</label>
                                        <input type="email" placeholder="Enter Your Email Address ..." />
                                    </motion.div>
                                    <motion.div className="form-group" variants={fieldVariants}>
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="Enter Your Phone Number ..." />
                                    </motion.div>
                                </motion.div>

                                <motion.div className="form-group full-width" variants={fieldVariants}>
                                    <label>Message</label>
                                    <textarea placeholder="Enter Your Message ..."></textarea>
                                </motion.div>

                                <motion.p className="privacy-note" variants={textVariants}>
                                    We respect your privacy — your email address is safe with us. We won’t sell it, trade it, or accidentally leave it on a café napkin. No spam, no nonsense — just great stories.
                                </motion.p>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    Submit
                                </motion.button>
                            </form>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Form;
