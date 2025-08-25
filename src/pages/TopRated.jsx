import React from 'react'
import Banner from '../components/banner'; 
import Form from '../components/form'
import Tabs from '../components/blogingtabs'
import img1 from '../images/banner-13.png'


function TopRated() {
  return (
    <div>
       <Banner title="Stories That Stir the Soul" tagline='where emotions collide and characters come alive'  desc="where emotions collide and characters come aliveExplore our curated collection of Drama stories written by both emerging voices and experienced authors. Each piece here captures the highs, lows, and in-betweens of human experience." image={img1} />
        <Tabs />
      <Form />
    </div>
  )
}

export default TopRated
