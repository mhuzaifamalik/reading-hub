import React from 'react'
import Banner from '../components/banner';
// import Featured from '../components/featured';
// import Blog from '../components/blogs'
// import Bloging from '../components/bloging';
// import Ourproducts from '../components/ourproducts';
import Form from '../components/form'
import Sec from '../components/Towsec'
import CustomCard from '../components/blogingsec'
import img14 from '../images/banner-12.png'
import img15 from '../images/sec-img.png'





function Genres() {
    return (
        <div>
            <Banner title="Every story begins with a mood, Choose yours" tagline='Explore Genres That Speak to You' desc="At TheReadingHub, storytelling is as diverse as the people behind it. Whether you're craving suspense, seeking laughter, or longing for timeless classics, our genre system helps you find the stories that match your moment." image={img14} />
            <Sec image={img15} title="All Available Genres" subtitle="Tailored reads for every mood and moment" descs="Below you'll find a curated list of our core genres. Tap into each to explore a stream of fresh content — from timeless public domain works to bold voices in modern fiction." />
            <CustomCard /> 
            <Form />
        </div>
    )
}

export default Genres
