import React, { useState } from 'react';

import {
    Form,
    Input,
    Button,
    Upload,
    Checkbox,
    Typography,
    Card,
    Avatar,
    message,
    Divider
} from "antd";
import {
    UserOutlined,
    BookOutlined,
    EditOutlined,
    ArrowLeftOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'antd';

const { Title, Text, Paragraph } = Typography;


const BloggerProfile = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [profileImage, setProfileImage] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([]);

    // New color theme variables
    const colorTheme = {
        primary: '#FFA900',      // Deep teal
        primaryLight: '#000', // Light teal
        secondary: '#f97316',    // Vibrant orange
        accent: '#FFA900',       // Sky blue
        textDark: '#0f172a8a',     // Almost black
        textLight: '#64748b',    // Gray
        background: '#000',   // Very light blue
        cardBg: '#ffffff',       // White
        border: '#e2e8f0',       // Light gray border
        success: '#22c55e'       // Green for success states
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        message.success('Profile created successfully!');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Please check the required fields!');
    };

    const handleImageUpload = (info) => {
        const { fileList } = info;
        if (fileList.length > 0) {
            const file = fileList[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file.originFileObj);
        }
    };

    const genreOptions = [
        "Drama", "Humor", "Thriller", "Horror", "Romance", "Historical Fiction",
        "Fantasy", "Science Fiction", "Mystery", "Biography", "Self-Help", "Poetry"
    ];

    return (
        <div style={{ background: colorTheme.background, minHeight: '100vh', padding: '20px 0' }}>
            <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    style={{
                        marginBottom: 16,
                        color: colorTheme.primary,
                        fontWeight: 500,
                        fontFamily: "'Outfit', sans-serif"
                    }}
                >
                    Back to Home
                </Button>

                <Row gutter={[32, 32]}>
                    <Col xs={24} lg={10}>
                        <Card
                            style={{
                                borderRadius: 16,
                                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                border: `1px solid ${colorTheme.border}`,
                                height: '100%',
                                fontFamily: "'Outfit', sans-serif",
                                backgroundColor: colorTheme.cardBg
                            }}
                            bodyStyle={{ padding: 40 }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: 32 }}>
                                <Title level={2} style={{ color: colorTheme.primary, marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>
                                    Start Your Journey
                                </Title>
                                <Paragraph style={{ fontSize: 16, color: colorTheme.textLight, fontFamily: "'Outfit', sans-serif" }}>
                                    Join our community of passionate readers and writers. Share your stories with the world.
                                </Paragraph>
                            </div>

                            <div style={{ textAlign: 'center', fontFamily: "'Outfit', sans-serif" }}>
                                <div style={{ position: 'relative', display: 'inline-block', fontFamily: "'Outfit', sans-serif" }}>
                                    <Avatar

                                        size={120}
                                        icon={!profileImage && <UserOutlined />}
                                        src={profileImage}
                                        style={{
                                            backgroundColor: profileImage ? 'transparent' : colorTheme.primaryLight,
                                            color: colorTheme.primary,
                                            border: `3px solid ${colorTheme.accent}`,
                                            fontFamily: "'Outfit', sans-serif",
                                            marginBottom: 16

                                        }}
                                    />
                                    <label htmlFor="upload" style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10 }}>
                                        <div style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: '50%',
                                            backgroundColor: colorTheme.secondary,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            border: '2px solid white',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                                        }}>
                                            <EditOutlined />
                                        </div>
                                    </label>
                                </div>

                                <Upload
                                    id="upload"
                                    beforeUpload={() => false}
                                    showUploadList={false}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                >
                                    <Text style={{
                                        display: 'block',
                                        color: colorTheme.primary,
                                        fontWeight: 500,
                                        marginTop: 8,
                                        fontFamily: "'Outfit', sans-serif"
                                    }}>
                                        Upload Profile Picture
                                    </Text>
                                </Upload>
                            </div>

                            <Divider style={{ borderColor: colorTheme.border }} />

                            <div>
                                <Title level={4} style={{ color: colorTheme.textDark, marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>
                                    <BookOutlined style={{ marginRight: 8, color: colorTheme.primary, fontFamily: "'Outfit', sans-serif" }} />
                                    Why create a blogger profile?
                                </Title>
                                <ul style={{ paddingLeft: 20, color: colorTheme.textLight, fontFamily: "'Outfit', sans-serif" }}>
                                    <li>Share your unique perspective with readers worldwide</li>
                                    <li>Build your audience and connect with fellow book lovers</li>
                                    <li>Get feedback on your writing and improve your craft</li>
                                    <li>Participate in exclusive writing challenges and events</li>
                                    <li>Monetize your content through our partner program</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} lg={14}>
                        <Card
                            style={{
                                borderRadius: 16,
                                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                border: `1px solid ${colorTheme.border}`,
                                backgroundColor: colorTheme.cardBg
                            }}
                            bodyStyle={{ padding: 40 }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: 32 }}>
                                <Title level={3} style={{ paddingLeft: 20, color: colorTheme.textLight, fontFamily: "'Outfit', sans-serif" }}>
                                    Create Your Blogger Profile
                                </Title>
                                <Text style={{ color: colorTheme.textLight, fontFamily: "'Outfit', sans-serif" }}>
                                    Fill in your details to get started on your storytelling journey
                                </Text>
                            </div>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                requiredMark={false}
                                scrollToFirstError

                            >
                                <Row gutter={16}>
                                    <Col xs={24} md={12} >
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            rules={[{ required: true, message: "Please enter your first name" }]}
                                            labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                            style={{
                                                borderRadius: 8,
                                                borderColor: colorTheme.border,
                                                fontFamily: "'Outfit', sans-serif"
                                            }}
                                        >
                                            <Input
                                                size="large"
                                                className="custom-input"
                                                placeholder="Enter first name"
                                                style={{
                                                    borderRadius: 8,
                                                    fontFamily: "'Outfit', sans-serif",
                                                    borderColor: colorTheme.border
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                            style={{
                                                borderRadius: 8,
                                                fontFamily: "'Outfit', sans-serif",
                                                borderColor: colorTheme.border
                                            }}
                                            label="Last Name"
                                            name="lastName"
                                            rules={[{ required: true, message: "Please enter your last name" }]}
                                        >
                                            <Input

                                                size="large"
                                                placeholder="Enter last name"
                                                style={{
                                                    borderRadius: 8,
                                                    fontFamily: "'Outfit', sans-serif",
                                                    borderColor: colorTheme.border
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                    style={{
                                        borderRadius: 8,
                                        borderColor: colorTheme.border,
                                        fontFamily: "'Outfit', sans-serif"
                                    }}
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: "Please choose a username" }]}
                                    extra={
                                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#999" }}>
                                            This will be part of your profile URL (e.g., thereadinghub.com/@username)
                                        </span>
                                    }  // ✅ extra closes here
                                >
                                    <Input
                                        size="large"
                                        prefix="@"
                                        className="custom-input"
                                        placeholder="Choose a username"
                                        style={{
                                            borderRadius: 8,
                                            borderColor: colorTheme.border
                                        }}
                                    />
                                </Form.Item>

                                <Row gutter={16}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                            label="Email Address"
                                            name="email"
                                            rules={[
                                                { required: true, type: "email", message: "Please enter a valid email" },
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="your@email.com"
                                                className="custom-input"
                                                style={{
                                                    borderRadius: 8,
                                                    borderColor: colorTheme.border
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                            label="Password"
                                            name="password"
                                            className="custom-input"
                                            rules={[
                                                { required: true, message: "Please create a password" },
                                                { min: 6, message: "Password must be at least 6 characters" }
                                            ]}
                                        >
                                            <Input.Password
                                                className="custom-input"
                                                size="large"
                                                placeholder="Create a strong password"
                                                style={{
                                                    borderRadius: 8,
                                                    borderColor: colorTheme.border
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                    label="Short Bio"
                                    name="bio"
                                    extra="Tell readers about yourself in 200-300 words"
                                >
                                    <Input.TextArea
                                        rows={4}
                                        className="custom-input"
                                        placeholder="Share your story, interests, and what readers can expect from your blog..."
                                        style={{
                                            borderRadius: 8,
                                            borderColor: colorTheme.border
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                    label="Occupation"
                                    name="occupation"
                                >
                                    <Input
                                        className="custom-input"
                                        size="large"
                                        placeholder="Writer, Student, Teacher, etc."
                                        style={{
                                            borderRadius: 8,
                                            borderColor: colorTheme.border
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    labelCol={{ style: { fontFamily: "'Outfit', sans-serif", fontWeight: 500 } }}
                                    label="Favorite Genres"
                                    name="genres"
                                    extra="Select the genres you're most interested in writing about"
                                >
                                    <div style={{
                                        border: `1px solid ${colorTheme.border}`,
                                        borderRadius: 8,
                                        padding: '16px 12px',
                                        // backgroundColor: selectedGenres.length > 0 ? colorTheme.primaryLight : 'transparent',
                                        transition: 'all 0.3s'
                                    }}>
                                        <Checkbox.Group
                                            style={{ width: '100%' }}
                                            onChange={setSelectedGenres}
                                        >
                                            <Row gutter={[12, 12]}>
                                                {genreOptions.map((genre) => (
                                                    <Col key={genre} xs={12} md={8}>
                                                        <Checkbox

                                                            value={genre}
                                                            style={{
                                                                borderRadius: 6,
                                                                fontFamily: "'Outfit', sans-serif",
                                                                padding: '4px 8px',
                                                                transition: 'all 0.2s',
                                                                margin: 0
                                                            }}
                                                        >
                                                            {genre}
                                                        </Checkbox>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Checkbox.Group>
                                    </div>
                                </Form.Item>

                                <Form.Item>
                                    <Button

                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{
                                            backgroundColor: colorTheme.primary,
                                            borderColor: colorTheme.primary,
                                            borderRadius: 8,
                                            height: 48,
                                            width: '100%',
                                            fontWeight: 600,
                                            fontSize: 16,
                                            marginTop: 16,
                                            fontFamily: "'Outfit', sans-serif"
                                        }}
                                    >
                                        Create Profile
                                    </Button>
                                </Form.Item>

                                <div style={{ textAlign: 'center', marginTop: 24 }}>
                                    <Text style={{ color: colorTheme.textLight }}>
                                        Already have an account?{' '}
                                        <a href="/seller/login" style={{ color: colorTheme.primary, fontWeight: 500 }}>
                                            Log In
                                        </a>
                                    </Text>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default BloggerProfile;