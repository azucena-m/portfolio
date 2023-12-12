import Background from "./Background";

function About() {
    return(
        <>
            <div id="slide2" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute flex justify-between transform -translate-y-1/4 left-3 right-3 top-1/4 text-sm md:text-xl text-white">
                    <a href="#slide1" className="btn btn-md btn-circle btn-ghost text-white text-3xl ">❮</a>
                    <div className={"space-y-6 md:px-10"}>
                        <p>Hey there! I'm a full stack developer. I dance between the front-end and back-end, creating seamless online experiences. Having worked with JavaScript, TypeScript, Express, React, Next.js, PostgreSQL, Oracle, HTML, CSS, Tailwind CSS, Git, Github, Docker, RESTful APIs, and Agile Methodologies, I bring a versatile toolkit to every project.</p>
                        <p>But when I'm not immersed in the virtual world, you'll find me embracing the beauty of nature. I swap my keyboard and debugging for exploring new destinations, particularly the ones that involve the beach! There's something about the sand between my toes and the sound of crashing waves that fuels my creativity.</p>
                        <p>So, whether I'm coding up a storm, exploring new places, or lounging on the beach, I'm your go-to person for bringing digital dreams to life while finding inspiration in the beauty of nature and the joy of travel. Let's build something amazing together!</p>
                    </div>
                    <a href="#slide3" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
                </div>
            </div>
        </>
    )
}

export default About