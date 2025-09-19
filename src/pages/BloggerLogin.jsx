import React from "react";
import { Form, Input, Button } from "antd";


function BloggerLogin() {
    const onFinish = (values) => {
        console.log("Login Values: ", values);
    };

    return (
        <div className="login-container">

            <div className="container">
                <h3 className="login-subtitle" style={{ color: "#fff", textAlign: "center", fontFamily: "'Outfit', sans-serif", fontSize: "20px", margin: "auto", width: "30%", }}>
                    LOG IN TO YOUR ACCOUNT TO WRITE, PUBLISH, AND MANAGE YOUR BLOGS SEAMLESSLY
                </h3>
                <h1 className="login-title" style={{ color: "#FFA900", padding: "10px 0", fontSize: "30px", fontFamily: "'Outfit', sans-serif", textAlign: "center" }}>WELCOME BACK, BLOGGER!</h1>

                <Form
                    name="loginForm"
                    layout="vertical"
                    onFinish={onFinish}
                    className="login-form"
                >
                    {/* Email */}
                    <Form.Item
                        label={
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "#FFA900",
                                }}
                            >
                                Email Address
                            </span>
                        }
                        name="email"
                        rules={[{ required: true, message: "Please enter your email" }]}
                    >
                        <Input
                            size="large"
                            classNames="login-input"
                            style={{
                                background: "#000",
                                color: "#fff"
                            }}
                            placeholder="Enter Your Email Address ..."
                            className="login-input w-50 d-flex"
                        />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        label={
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "#FFA900",
                                    textAlign: "center"
                                }}
                            >
                                Password
                            </span>
                        }
                        name="password"
                        rules={[{ required: true, message: "Please enter your password" }]}
                    >
                        <Input.Password
                            size="large"
                            style={{
                                background: "#000",
                                color: "#fff"
                            }}
                            placeholder="Enter Your Password ..."
                            className="login-input"
                        />
                    </Form.Item>

                    {/* Forgot Password */}
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>

                    {/* Submit */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-btn"
                            style={{ background: "#FFA900", color: "#000", fontFamily: "'Outfit', sans-serif", width: "500px", borderRadius: "25px", height: "50px", margin: "0 auto", display: "block", fontSize: "25px" }}
                        >
                            login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default BloggerLogin;
