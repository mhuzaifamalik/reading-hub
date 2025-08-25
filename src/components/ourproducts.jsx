import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import card1 from '../images/shirt-1.png';
import card2 from '../images/shirt-2.png';
import card3 from '../images/shirt-3.png';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function OurProducts() {
  return (
    <div className="products-blog">
      <div className="container">
        <Row>
          <Col span={24}>
            <motion.div
              className="product-cards-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Minimal designs. Maximum meaning</span>
              <h2>Wear Your Love for Stories</h2>
              <p>Browse our exclusive collection of TheReadingHub.Net merchandise — all printed on demand and shipped with care. From quote mugs to embroidered owl-logo t-shirts, our merch speaks volumes.</p>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={50}>
            {[ 
              { src: card1, label: "T-Shirts" }, 
              { src: card2, label: "Mugs" }, 
              { src: card3, label: "Mugs" } 
            ].map((item, index) => (
              <Col span={8} key={index}>
                <a href="/">
                  <motion.div
                    className="card-1"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img src={item.src} alt="product" />
                    <span>{item.label}</span>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </div>
  );
}

export default OurProducts;
