import React  from 'react'
import Img from '../images/testimonails.png'; // Import your image here
import Img1 from '../images/articalheader.png'; // Import your image here
function BlogPage() {
    return (
        <div>
            <section className="main-bloging-pages-section">
                <div className="container">
                    <div className="main-bloging-pages-text">
                        <h2>Whispers Behind the Curtain</h2>
                        <img src={Img} alt="img" />
                        <h6>Emma William</h6>
                    </div>
                    <div className="main-bloging-pages-content">
                        <img src={Img1} alt="img" />
                        <p>The theater has always been a place where dreams are born, emotions are amplified, and truths are artfully disguised. But behind the velvet curtains, where the audience’s applause can’t reach, lies a world of ambition, rivalry, and secrets too dangerous to reveal. Whispers Behind the Curtain takes us deep into this hidden side of show business — where every smile hides a motive, and every friendship has a breaking point.</p>
                        <p>The story unfolds in the historic Riverton Playhouse, a grand yet aging theater known for its soul-stirring performances. The creak of wooden floorboards, the scent of old costumes, and the constant buzz of rehearsals create an atmosphere charged with both excitement and tension. At the heart of it all is “The Last Sunrise”, the most ambitious play the theater has ever attempted. Its success could make careers, but its failure could end them.</p>
                        <h4>CHARACTERS</h4>
                        <h6>Clara Evans</h6>
                        <p>A rising star whose raw talent has made her the talk of the town. She’s determined to play the lead role — at any cost.</p>
                        <h6>Martin Hughes</h6>
                        <p>The veteran director with a fading reputation. This play is his final chance to prove himself.</p>
                        <h6>Martin Hughes</h6>
                        <p>The veteran director with a fading reputation. This play is his final chance to prove himself.</p>
                        <h6>Eva Carter</h6>
                        <p>Clara’s best friend and understudy, whose loyalty will be tested when opportunities arise.</p>
                        <h2>James Calloway</h2>
                        <p>A mysterious new stagehand with a past no one dares to question.</p>
                        <p>As rehearsals progress, tensions grow. Clara overhears hushed conversations between Martin and the producer — talks about replacing her with a more “marketable” actress. Meanwhile, Eva starts receiving anonymous notes hinting at secrets that could ruin Clara’s career. The whispers grow louder, and soon, alliances begin to shift. Backstage, friendships crumble under the weight of envy and ambition, and no one can tell who is truly on their side.</p>
                        <p>On the night of the final dress rehearsal, disaster strikes — the lead prop is sabotaged, injuring one of the actors. Whispers spread like wildfire, and suspicion falls on Clara. The truth, however, is far more complicated, and the real culprit hides in plain sight. Opening night arrives. The audience is unaware of the chaos behind the curtains. Every actor steps on stage, masking turmoil with perfect performances. But when a key scene comes, a shocking on-stage confession forces the truth into the spotlight — ending the play in a way no one, not even the director, could have scripted.</p>
                        <p>Whispers Behind the Curtain is a gripping tale of human ambition, the fragility of relationships, and the dangerous power of secrets. It reminds us that in the theater — as in life — the most captivating stories often happen where the audience can’t see them.</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage
