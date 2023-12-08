import Background from "./Background";

function Contact() {
    return(
        <>
            <div id="slide4" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p>loremtext</p>
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    )
}

export default Contact