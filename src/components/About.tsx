import Background from "./Background";
import Tech from "./Tech"

function About() {
    return(
        <>
            <div id="about" className="min-h-screen bg-base-200">
                <h2 className="text-center text-5xl pb-16 text-warning">About</h2>
                <div className="flex justify-evenly px-16">
                    <div><img src="/avatar.JPG" alt="image of Azucena" className="max-w-sm rounded-lg shadow-2xl"/></div>
                    <div className="">
                        <div className={"space-y-6 text-xl md:px-16 font-serif"}>
                            <p>Hey there! I'm a full stack developer. I dance between the front-end and back-end,
                                creating seamless online experiences. Having worked with JavaScript, TypeScript,
                                Express, React, Next.js, PostgreSQL, Oracle, HTML, CSS, Tailwind CSS, Git, Github,
                                Docker, RESTful APIs, and Agile Methodologies, I bring a versatile toolkit to every
                                project.</p>
                            <p>But when I'm not immersed in the virtual world, you'll find me embracing the beauty of
                                nature. I swap my keyboard and debugging for exploring new destinations, particularly
                                the ones that involve the beach!</p>
                            <p>So, whether I'm coding up a storm, exploring new places, or lounging on the beach, I'm
                                your go-to person for bringing digital dreams to life while finding inspiration in the
                                beauty of nature and the joy of travel. Let's build something amazing together!</p>
                        </div>
                    </div>
                </div>
                <Tech/>
            </div>
        </>
    )
}

export default About