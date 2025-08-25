import React from 'react';
import Banner from '../components/banner'; 
import Featured from '../components/featured';
import Blog from '../components/blogs'
import Bloging from '../components/bloging';
import Ourproducts from '../components/ourproducts';
import Form from '../components/form'
import img1 from '../images/back-banner.png'

function Home() { 
  return (
    <div>
      <Banner title="From timeless classics to bold new voices" tagline='Read What Moves You'  desc='Welcome to TheReadingHub.Net — your minimalist oasis for immersive storytelling. Browse curated genres like thrillers, romance, humor, and historical fiction. Rate what you love. Share what inspires you.' image={img1} />
      <Featured />
      <Blog />
      <Bloging title="Fresh voices. Bold perspectives. One scroll away" heading="Latest From the Community" desc="Explore the latest stories from our growing community of passionate writers. From thoughtful fiction to witty satire and timeless reflections, these entries reflect the diverse range of voices that make TheReadingHub.Net a literary haven." />
      <Ourproducts />
      <Form />
    </div>
  );
}

export default Home;