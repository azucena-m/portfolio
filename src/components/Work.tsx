import Background from "./Background";

function Work() {
    return(
        <>
            <div id="slide3" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div className="card w-72 glass">
                        <figure><img src="/coa2.png" alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Conchas Con Amor</h2>
                            <p className="text-sm">A single page website that displays a small business in Albuquerque producing conchas (Mexican sweet bread).</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://conchas.azucena-marroquin.com/">See Website</a></button>
                                <button className="btn btn-primary"><a href="https://github.com/azucena-m/pwp-conchas-con-amor">See Repo</a></button>
                            </div>
                        </div>
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    )
}

export default Work