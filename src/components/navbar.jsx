function Navbar(){
    return(
        <header className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">Quotiva</a>
                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/explore">Explore</a>
                    <a href="/categories">Categories</a>
                    <a href="/favorites">Favorites</a>
                </nav>
                <button className="search-button">Search</button>
            </div>
        </header>
    )
}
export default Navbar