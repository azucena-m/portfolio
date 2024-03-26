

function Work() {
    return(
        <>
            <div id="projects" className="min-h-screen">
                <h2 className="text-secondary text-5xl">Projects</h2>
                <div className="flex justify-evenly py-20">
                    <div className="card card-compact h-64 w-96 ml-3 mb-4 md:mb-0 md:ml-0 md:h-96 glass">
                        <figure><img src="/coa2.png" alt="conchas logo"/></figure>
                        <div className="card-body">
                            <span>Website</span>
                            <h2 className="card-title text-white text-2xl">Conchas Con Amor</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="https://conchas.azucena-marroquin.com/">See Website</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact h-96 w-96 ml-3 md:ml-0 md:h-96 glass">
                        <figure><img src="/foodTruck.png" alt="food truck hunter" className="md:h-64"/></figure>
                        <div className="card-body">
                            <span>Full Stack Web Application</span>
                            <h2 className="card-title text-white text-2xl">Food Truck Hunter</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="https://food-truck-hunter.ddfullstack.xyz/">See Website</a></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work