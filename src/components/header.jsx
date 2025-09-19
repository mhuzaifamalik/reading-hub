import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Button, Modal, Form, Input, Divider } from 'antd';
import { motion } from 'framer-motion';
import { IoPersonOutline } from "react-icons/io5";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Header() {
    const [authOpen, setAuthOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
   
    const handleAuth = (values) => {
        console.log("✅ Submitted Data:", values);
        setAuthOpen(false);
    };
    const navigate = useNavigate();

    return (
        <>
            {/* Auth Modal */}
            <Modal
                open={authOpen}
                onCancel={() => setAuthOpen(false)}
                footer={null}
                centered
                bodyStyle={{ padding: "30px", borderRadius: "12px" }}
            >
                {/* Modal Header */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h2 style={{ marginBottom: "5px" }} className='font-outfit font-bold text-3xl'>
                        {isSignUp ? "Create Your Account" : "Welcome Back"}
                    </h2>
                    <p style={{ color: "#888", margin: 0 }} className='font-outfit'>
                        {isSignUp
                            ? "Sign up to get started with our platform"
                            : "Sign in with your username or email"}
                    </p>
                </div>

                {/* Form */}
                <Form layout="vertical" onFinish={handleAuth}>
                    {isSignUp && (
                        <>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: "Enter your username!" }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Enter your email!" },
                                    { type: "email", message: "Invalid email!" },
                                ]}
                            >
                                <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
                            </Form.Item>
                        </>
                    )}

                    {!isSignUp && (
                        <Form.Item
                            name="loginId"
                            rules={[{ required: true, message: "Enter username or email!" }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Username or Email"
                                size="large"
                            />
                        </Form.Item>
                    )}

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Enter your password!" }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                    </Form.Item>

                    {isSignUp && (
                        <Form.Item
                            name="confirmPassword"
                            dependencies={["password"]}
                            rules={[
                                { required: true, message: "Confirm your password!" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error("Passwords do not match!"));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Confirm Password"
                                size="large"
                                className='font-outfit'
                            />
                        </Form.Item>
                    )}


                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            style={{ borderRadius: "8px" }}
                            className='font-outfit bg-[#FFA900] text-black'
                        
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                    </Form.Item>
                </Form>


                <Divider plain>or</Divider>


                <p style={{ textAlign: "center" } }  className='font-outfit'>
                    {isSignUp ? (
                        <>Already have an account?{" "}
                            <a onClick={() => setIsSignUp(false)} style={{ fontWeight: "500" }} className='font-outfit underline'>
                                Sign In
                            </a>
                        </>
                    ) : (
                        <>Don’t have an account?{" "}
                            <a onClick={() => setIsSignUp(true)} style={{ fontWeight: "500" }} className='font-outfit'>
                                Sign Up
                            </a>
                        </>
                    )}
                </p>
            </Modal>
      


            <motion.header
                className="header"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="logo"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </motion.div>

                <motion.nav
                    className="nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <ul>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/">Home</a></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/Genres">Genres</a></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/Toprated">Top Rated</a></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/Signature">Signature Collection</a></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/About">About</a></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><a href="/Contact">Contact</a></motion.li>
                    </ul>
                </motion.nav>

                {/* Sign In / Join Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                  navigate("/bloggerProfile");
                    }}
                    className="sign-up-btn font-outfit"
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        background: "#FFA900",
                        color: "#000",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                Blogger sign uP
                </motion.button>
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                        setIsSignUp(true);
                        setAuthOpen(true);
                    }}
                    className="sign-up-btn font-outfit"
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        background: "#FFA900",
                        color: "#000",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                  <IoPersonOutline />
                </motion.button>
            </motion.header>
        </>
    );
}

export default Header;
