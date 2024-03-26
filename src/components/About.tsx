import Background from "./Background";
import Tech from "./Tech"

function About() {
    return(
        <>
            <div id="about" className="container mx-auto mt-10">
                <div className="">
                    <h2 className="text-center text-5xl pb-5">About</h2>
                    <div className={"space-y-6 md:px-16"}>
                        <p>Hey there! I'm a full stack developer. I dance between the front-end and back-end, creating seamless online experiences. Having worked with JavaScript, TypeScript, Express, React, Next.js, PostgreSQL, Oracle, HTML, CSS, Tailwind CSS, Git, Github, Docker, RESTful APIs, and Agile Methodologies, I bring a versatile toolkit to every project.</p>
                        <p>But when I'm not immersed in the virtual world, you'll find me embracing the beauty of nature. I swap my keyboard and debugging for exploring new destinations, particularly the ones that involve the beach!</p>
                        <p>So, whether I'm coding up a storm, exploring new places, or lounging on the beach, I'm your go-to person for bringing digital dreams to life while finding inspiration in the beauty of nature and the joy of travel. Let's build something amazing together!</p>
                    </div>
                </div>
                <Tech/>
            </div>
        </>
    )
}

export default About