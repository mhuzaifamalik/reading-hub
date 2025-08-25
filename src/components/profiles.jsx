import React from 'react'
import Blog from '../components/bloggingPost'
import ImgProfile from '../images/profile-img.png';
function profiles({ subtitle, desc, Heading }) {
    return (
        <div>
            <div className="container">
                <div className="profile-heading-text">
                    <h3>{subtitle}</h3>
                    <p>{desc}</p>
                    <h2>{Heading}</h2>
                </div>
            </div>
            <div className="profile-details">
                <div className="container">
                    <img src={ImgProfile} alt="Profile of Emma William" />
                    <div className="main-profile-content">
                        <h2>Emma William</h2>
                        <p>Emma William is a passionate storyteller and film critic specializing in drama and romance genres. With over a decade of experience in reviewing and analyzing films, she brings a deep understanding of narrative structure and emotional storytelling.</p>
                    </div>
                    <div className="main-profile-content">
                        <h2>The Heart of Drama</h2>
                        <h5><strong>Why Drama Resonates With Everyone</strong></h5>
                        <p>Drama is more than just a genre; it’s an emotional connection. From heartbreak to triumph, it offers narratives that feel deeply personal yet universally relatable. Whether it’s a tear-jerking climax or a quiet moment of reflection, drama stories allow us to live through experiences we might never encounter in real life.</p>
                    </div>
                    <div className="main-profile-content">
                        <h2>Elements That Make Drama Powerful</h2>
                        <h5><strong>The Building Blocks of a Captivating Story</strong></h5>
                        <ul>
                            <li>Strong, layered characters with real flaws and desires</li>
                            <li>Conflict that challenges beliefs and values</li>
                            <li>Emotional stakes that keep audiences invested</li>
                            <li>Realistic dialogue that mirrors everyday conversations</li>
                            <li>Cinematic pacing that gives moments room to breathe</li>
                        </ul>
                    </div>
                    <div className="main-profile-content">
                        <h2>Memorable Examples of Drama</h2>
                        <h5><strong>Stories That Have Defined the Genre</strong></h5>
                        <p>From historical epics like Schindler’s List to contemporary masterpieces such as Marriage Story, dramas have shaped cinema and literature in unforgettable ways. Each story invites the audience to see the world through a different lens, sparking empathy and introspection.</p>
                    </div>
                    <div className="main-blog">
                        <Blog />
                        <Blog />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default profiles
