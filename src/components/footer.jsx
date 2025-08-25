import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import img1 from '../images/logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col span={24}>
            <motion.div
              className="footer-inner"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={img1}
                alt="img"
                className="footer-logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              <motion.div
                className="main-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <ul>
                  {['Home', 'Genres', 'Top Rated', 'Merchandise', 'About'].map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <a href="/">{item}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="last-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <ul>
                  <li>© 2025 Copyright | The Reading Hub | All Rights Reserved</li>
                  <li>
                    Powered By <a href="/">Design Verse Studios</a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
