import Background from "./Background";

function Work() {
    return(
        <>
            <div id="work" className="">
                
                <div className="">
                    <div className="card card-compact h-64 w-96 ml-3 mb-4 md:mb-0 md:ml-0 md:h-96 glass">
                        <figure><img src="/coa2.png" alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-slate-200">Conchas Con Amor</h2>
                            <p className="text-sm text-slate-200">A single page website that displays a small business in Albuquerque producing conchas (Mexican sweet bread).</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="https://conchas.azucena-marroquin.com/">See Website</a></button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact h-96 w-96 ml-3 md:ml-0 md:h-96 glass">
                        <figure><img src="/foodTruck.png" alt="food truck hunter" className="md:h-64"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-slate-200">Food Truck Hunter</h2>
                            <p className="text-xm md:text-sm text-slate-200">Web app for food truck lovers looking for something to eat. Search for your favorite truck to find their current location and open times, or look for something new to eat! If you're a truck owner, you can create an account and update your truck's info in one single app.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-xs"><a href="http://food-truck-hunter.ddfullstack.xyz/">See Website</a></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work