import Background from "./Background";

function Contact() {
    return(
        <>
            <div id="slide4" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute md:flex md:justify-between transform -translate-y-1/4 left-3 right-3 top-1/4">
                    <a href="#slide3" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❮</a>
                        {/*<div className="artboard md:phone-3"><img src="/resume1.png" alt="resume page one" className=""/></div>*/}
                        {/*<div className="artboard md:phone-3 "><img src="/resume2.png" alt="resume page two" className="" /></div>*/}
                    <div className="hero h-96 md:min-h-screen" >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Contact Me!</h1>
                                <p className="mb-5">Please feel free to reach me via LinkedIn or through the contact information provided on my resume. I look forward to hearing from you!</p>
                                <button className="btn btn-primary mr-2"><a href="https://www.linkedin.com/in/azucena-marroquin/">LinkedIn</a></button>
                                <button className="btn btn-primary"><a href="https://docs.google.com/document/d/1vZd9MygXeACR0Cd1404bKeEnzDoKuWq7e0BT1LOtAFA/edit">Resume</a></button>
                            </div>
                        </div>
                    </div>

                    <a href="#slide1" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
                </div>
            </div>
        </>
    )
}

export default Contact