import React from 'react'
import Banner from '../components/banner'
import Sec from '../components/Towsec'
import img15 from '../images/aboutmention.png'
import img5 from '../images/roter.png'
import img3 from '../images/client-side.png'

import img14 from '../images/banner-about.png'
function about() {
    return (
        <div>
            <section className="banner-about">
                <Banner title="Where Stories Come Alive — One Genre at a Time" tagline=' About TheReadingHub.nets' desc="Welcome to TheReadingHub.net, a carefully crafted space for readers and writers who crave depth, imagination, and connection through the written word. Designed with minimalism in mind, we focus on creating a serene reading experience, free from distractions and clutter." image={img14} />
                <Sec rtl={true} image={img15} title="Celebrate the Power of Storytelling" subtitle="Our Mission" descs="At TheReadingHub, we believe stories shape who we are. They inspire, comfort, and challenge us. That’s why we’ve built a platform that uplifts both creators and consumers of literature—providing a clean, elegant space for timeless tales and contemporary voices to flourish. With curated genres and a community-driven rating system, our mission is to elevate quality storytelling and provide a meaningful experience to everyone who visits. " />

                <Sec rtl={false} image={img5} title="Minimalism Meets Depth" subtitle="What Makes Us Different" descs="Whether you’re a lifelong book lover or just starting your literary journey, TheReadingHub welcomes you. Explore our diverse genres, share your thoughts through ratings and reviews, and connect with fellow enthusiasts. We’re more than just a reading platform; we’re a community that celebrates the art of storytelling in all its forms. 

Easily find content tailored to your mood or taste — from drama and historical fiction to horror and sci-fi. Let your voice be heard by rating stories, leaving feedback, and discovering top-rated tales from fellow readers. Support your favorite genres with tasteful merchandise like T-shirts, mugs, and posters. We value your experience, so ads are minimal and donations are always optional. Plus, explore carefully selected books and products through our affiliate curation — all handpicked with passionate readers in mind." />
                <Sec
                    rtl={true}
                    image={img3}
                    title="Minimalism Meets Depth"
                    descs={[
                        "John Mandujano was born and raised in the Roseland neighborhood on the South Side of Chicago. He attended Mendel Catholic High School before enrolling at Boston College, where he distinguished himself as the New England Novice Debate Champion and was named Top Freshman Debater.",
                        "John launched his professional career as a software engineer, consulting for prominent organizations including Bank of America, Northeastern University, Boston Edison, Gillette, and Fidelity Investments. In 2000, he was recognized as Team Information Services Consultant of the Year. He later served as an IT Project Manager for PharMerica, the State of Texas Laboratory and Infectious Disease Services, and the U.S. Department of Veterans Affairs.",
                        "A dedicated communicator and lifelong learner, John achieved the rank of Distinguished Toastmaster and performed stand-up comedy in St. Petersburg. He contributed a chapter to The Handbook of Continuing Professional Development for the Health Informatics Professional and served as a guest speaker for the Project Management Institute’s Florida Suncoast Chapter. His passion for music also led him to appear as a guest DJ on WMNF-FM Tampa, featured on “The 60s Show,” “The 70s Show,” and “Surface Noise.”",
                        "Beyond his technical and public speaking accomplishments, John has written short stories and screenplays, submitting his work to various writing competitions. Although he once received an honorable mention, he found the experience lacking in meaningful engagement. That realization—shared by many aspiring writers—sparked the idea for TheReadingHub.Net, a platform created to inspire writers to share their stories and to connect readers with fresh, original short fiction."

                    ]}

                />
            </section>
        </div>
    )
}

export default about
