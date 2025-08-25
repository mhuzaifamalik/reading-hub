import React from 'react';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
import Blog from '../components/bloging'
const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Newest',
        children: <Blog /> ,
    },
    {
        key: '2',
        label: 'Top Rated',
        children: <Blog />,
    },
    {
        key: '3',
        label: 'Most Read',
        children: <Blog />,
    },
];

function BlogingTabs() {
    return (
        <div>
            <section className="maintabs">
                <div className="container">
                    <Row >
                        <Col span={24}>
                           <div className="tabs">
                             <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                           </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
}

export default BlogingTabs;
