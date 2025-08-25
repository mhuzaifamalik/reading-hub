import React from 'react'
import { Row, Col } from 'antd';
// import img2 from '../images/sec-img.png'

function Towsec({ image, title, subtitle, descs, rtl }) {
    return (
        <div>
            <section className="sect">
                <div className="container">
                    <Row align={'middle'} gutter={[16, 16]}>
                        {rtl ?
                            <>
                                <Col span={12}>
                                    <div className="sec-text">
                                        {subtitle && <span>{subtitle}</span>}

                                        <h2>{title}</h2>
                                        {Array.isArray(descs) ? (
                                            descs.map((item, index) => <p key={index}>{item}</p>)
                                        ) : (
                                            <p>{descs}</p>
                                        )}
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="sec-img">
                                        <img src={image} alt="" />
                                    </div>
                                </Col>
                            </> :
                            <>
                                <Col span={12}>
                                    <div className="sec-img">
                                        <img src={image} alt="" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="sec-text">
                                        <span>{subtitle}</span>

                                        <h2>{title}</h2>
                                        <p>{descs}</p>
                                    </div>
                                </Col>
                            </>}
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Towsec
