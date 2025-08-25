import React from 'react'
import { Row, Col } from 'antd';
import Img1 from '../images/books.png'; // Assuming you have an image for the blog post


function bloggingPost() {
  return (
    <>
      <div className="blogging">
        <Row gutter={25} align="middle">
          <Col span={12}>
            <div className="profile-blogging-text">
              <span>Whispers Behind the Curtain</span>
              <h2>Emma William</h2>
              <p>Step into the shadows of the stage where every whispered secret holds the power to change everything. This captivating tale explores ambition, betrayal, and the fragile balance between fame and friendship.</p>
              <a href="/" className='nav-root'>DRAMA</a>
              <a className='href-link' href="/">View more</a>
            </div>
          </Col>
          <Col span={12}>
            <div className="profile-blogging-imges">
              <img src={Img1} alt="img" />
            </div>
          </Col>
        </Row>
      </div>  
    </>
  )
}

export default bloggingPost
