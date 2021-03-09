import React from 'react';
import { Link } from 'gatsby';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="wrapper">
                    <h1>about</h1>
                    <p>I made this site to share my ideas for a simple, Framer Motion powered components. Although I made a tutorial with explaination for each component, I think that the most helpful thing is a full, finished code in one place, so you can analyze it by yourself.</p>
                    <p>After briefly trying another popular React animation libraries, I think Framer Motion is the most begginer-friendly option here. When an idea of a site with many, nicely animated components came to my mind I was also a very begginer in terms of Framer Motion. It wasn't ment to be a tutorial site, but after I noticed that there is still not many Framer Motion materials on the web, I thought - why not add some from myself?</p>
                    <p>Of course I'm not an expert by any means, but I learned a lot when creating this site and there's a pro tip from me about learning Framer Motion: <Link to="https://www.framer.com/api/motion/animation/">tutorials might be good, but docs are great!</Link></p>
                    <div className="footer-about">
                        <span>made by</span> <Link to="https://github.com/MMuii">mmuii</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
