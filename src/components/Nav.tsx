function Nav(){
    return(
        <>
        <div className="navbar rounded-box bg-none">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:hidden">
                        <li><a href="#slide2">About</a></li>
                        <li><a href="#slide3">Work</a></li>
                        <li><a href="#slide4">Resume</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <ul className={"hidden md:flex md:space-x-6 "}>
                    <li><a href="#slide2">About</a></li>
                    <li><a href="#slide3">Work</a></li>
                    <li><a href="#slide4">Resume</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <a href="#slide1"><img alt="avatar" src="/avatar.JPG" /></a>
                        </div>
                    </div>
            </div>
        </div>
    </>
    )
}

export default Nav