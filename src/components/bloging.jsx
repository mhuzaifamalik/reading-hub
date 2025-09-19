import React, { useState } from 'react';
import { Row, Col, Rate } from 'antd';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";

import blogImg from '../images/bloging-1.png';
import Testi1 from "../images/testimonails-1.png";
import Testi2 from "../images/testimonails-78.png";
import testimonails from '../images/testimonails.png';
import test from '../images/bloging-card.png';
import test1 from '../images/books.png';

const blogs = [
  {
    img: blogImg,
    genre: 'Humor',
    date: '2 days ago',
    authorImg: testimonails,
    author: 'Jason Patel',
    role: 'Stand-Up Comedian',
    rating: 2,
    title: 'The Coffee Mug Rebellion',
    desc: 'When office supplies gain sentience and stage a revolution, expect chaos, laughter, and ...'
  },
  {
    img: test,
    genre: 'Horror',
    date: '2 days ago',
    authorImg: Testi1,
    author: 'Daniel Xu',
    role: 'High School Teacher',
    rating: 2,
    title: 'Whispers in the Library',
    desc: 'The town’s abandoned library has secrets that want to be heard. And one curious visitor finds out the price ...'
  },
  {
    img: test1,
    genre: 'Romance',
    date: '1 week ago',
    authorImg: Testi2,
    author: 'Amelia Grant',
    role: 'Amelia Grant',
    rating: 2,
    title: 'When Stars Forget to Shine',
    desc: 'Set against the backdrop of a sleepy French village, two souls meet under unusual stars. A gentle ...'
  },
  // Add more blog objects here as needed
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

function Bloging({ title, heading, desc }) {
  const [visibleCount, setVisibleCount] = useState(3); // Show 3 initially
  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="main-bloging">
      <div className="container">
        <Row gutter={30}>
          <Col span={24}>
            <motion.div
              className="blogging-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>{title}</span>
              <h2>{heading}</h2>
              <p>{desc}</p>
            </motion.div>
          </Col>
        </Row>

 
        {Array.from({ length: Math.ceil(visibleBlogs.length / 3) }).map((_, rowIdx) => {
          const rowItems = visibleBlogs.slice(rowIdx * 3, rowIdx * 3 + 3);
          return (
            <Row gutter={30} key={rowIdx} style={{ marginBottom: '30px' }}>
              <motion.div
                className="bloging-cards"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}
              >
                {rowItems.map((item, idx) => (
                  <motion.div key={idx} variants={cardVariants} style={{ width: '32%' }}>
                    <div className="custom-card">
                      <img src={item.img} alt="blog" />
                      <ul>
                        <li><a href="/">{item.genre}</a></li>
                        <li><a href="/">{item.date}</a></li>
                      </ul>
                    </div>
                    <div className="card-bloging">
                      <ul className="bloging-ul">
                        <li>
                          <img src={item.authorImg} alt={item.author} />
                          <span>
                            <ul className="bloging-tron">
                              <li className="icons-blogs">{item.author}</li>
                              <li className="icons-blogs-1">{item.role}</li>
                            </ul>
                          </span>
                        </li>
                        <li><Rate disabled defaultValue={item.rating} /></li>
                      </ul>
                    </div>
                    <div className="bottom-card-text">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                      <a href="/">Continue reading <FaArrowRightLong /></a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Row>
          );
        })}

      
        {visibleCount < blogs.length && (
          <motion.a
            className="introf"
            onClick={() => setVisibleCount(prev => prev + 3)}
            style={{ cursor: 'pointer', display: 'inline-block', marginTop: '20px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Load More
          </motion.a>
        )}
      </div>
    </div>
  );
}

export default Bloging;
