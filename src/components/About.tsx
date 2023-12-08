import Background from "./Background";

function About() {
    return(
        <>
            <div id="slide2" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❮</a>
                    <p>Hey there! I'm a full stack developer, and I thrive on the excitement of crafting digital wonders. I effortlessly dance between the front-end finesse and back-end wizardry, creating seamless online experiences. Having worked with JavaScript, TypeScript, Express, React, Next.js, PostgreSQL, Oracle, HTML, CSS, Tailwind CSS, Git, Github, Docker, RESTful APIs, and Agile Methodologies, I bring a versatile toolkit to every project.</p>
                    <p>But when I'm not immersed in the virtual world, you'll find me embracing the beauty of nature. I swap my keyboard and debugging for exploring new destinations, particularly the ones that involve the beach! There's something about the sand between my toes and the sound of crashing waves that fuels my creativity.</p>
                    <p>So, whether I'm coding up a storm, exploring new places, or lounging on the beach, I'm your go-to person for bringing digital dreams to life while finding inspiration in the beauty of nature and the joy of travel. Let's build something amazing together!</p>
                    <a href="#slide3" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
                </div>
            </div>
        </>
    )
}

export default About