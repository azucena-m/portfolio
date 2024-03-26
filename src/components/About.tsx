import Background from "./Background";
import Tech from "./Tech"

function About() {
    return(
        <>
            <div id="about" className="min-h-screen bg-base-200">
                <div className="flex justify-evenly p-20">
                    <div><img src="/avatar.JPG" alt="image of Azucena" className="max-w-sm rounded-lg shadow-2xl"/></div>
                    <div className="">
                        <div className={"space-y-6 text-xl md:px-16 font-serif"}>
                            <h2 className="text-3xl text-secondary italic">-About</h2>
                            <p>Hey there! I'm a full stack developer. I dance between the front-end and back-end,
                                creating seamless online experiences.</p>
                            <p>I am a first generation engineer with an interesting background. I am excited to create
                                innovative solutions through the use of my diverse skills and experience</p>
                        </div>
                    </div>
                </div>
                <Tech/>
            </div>
        </>
    )
}

export default About