import Background from "./Background";

function Work() {
    return(
        <>
            <div id="slide3" className="carousel-item relative w-full">
                <Background/>
                <div className="absolute md:flex md:justify-between transform -translate-y-1/4 left-3 right-3 top-1/4">
                    <a href="#slide2" className="btn btn-md btn-circle btn-ghost text-white text-3xl ">❮</a>
                    <div className="card card-compact h-64 w-96 ml-3 mb-4 md:mb-0 md:ml-0 md:h-96 glass">
                        <figure><img src="/coa2.png" alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Conchas Con Amor</h2>
                            <p className="text-sm">A single page website that displays a small business in Albuquerque producing conchas (Mexican sweet bread).</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="https://conchas.azucena-marroquin.com/">See Website</a></button>
                                <button className="btn btn-primary btn-xs"><a href="https://github.com/azucena-m/pwp-conchas-con-amor">See Repo</a></button>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">CSS</div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact h-96 w-96 ml-3 md:ml-0 md:h-96 glass">
                        <figure><img src="/foodTruck.png" alt="food truck hunter" className="md:h-64"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Food Truck Hunter</h2>
                            <p className="text-xm md:text-sm">Web app for food truck lovers looking for something to eat. Search for your favorite truck to find their current location and open times, or look for something new to eat! If you're a truck owner, you can create an account and update your truck's info in one single app</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="http://food-truck-hunter.ddfullstack.xyz/">See Website</a></button>
                                <button className="btn btn-primary btn-xs"><a href="https://github.com/web-43-truck/foodtruck/tree/development">See Repo</a></button>
                                <div className="badge badge-outline">Next.js</div>
                                <div className="badge badge-outline">TypeScript</div>
                                <div className="badge badge-outline">Express</div>
                                <div className="badge badge-outline">React.js</div>
                                <div className="badge badge-outline">PostgreSQL</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Docker</div>
                            </div>
                        </div>
                    </div>
                    <a href="#slide4" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
                </div>
            </div>
        </>
    )
}

export default Work