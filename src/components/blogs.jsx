import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import Img1 from '../images/blogsImg/1.png';
import Img2 from '../images/blogsImg/2.png';
import Img3 from '../images/blogsImg/3.png';
import Img4 from '../images/blogsImg/4.png';
import Img5 from '../images/blogsImg/5.png';
import Img6 from '../images/blogsImg/6.png';
import Img7 from '../images/blogsImg/7.png';
import Img8 from '../images/blogsImg/8.png';

const genres = [
  { img: Img1, label: 'Drama' },
  { img: Img2, label: 'Romance' },
  { img: Img3, label: 'Thriller' },
  { img: Img4, label: 'Comedy' },
  { img: Img5, label: 'Fantasy' },
  { img: Img6, label: 'Sci-Fi' },
  { img: Img7, label: 'Mystery' },
  { img: Img8, label: 'Biography' }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

function Blogs() {
  return (
    <div className="blog-banner">
      <div className="container">
        <Row>
          <Col span={24}>
            <motion.div
              className="main-banner-blog"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Tailored reads for every mood and moment</span>
              <h2>Discover Stories by Genre</h2>
            </motion.div>

            <motion.div
              className="blogs-root"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul>
                {genres.map((genre, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <img src={genre.img} alt={genre.label} />
                    <span><p>{genre.label}</p></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Blogs;
