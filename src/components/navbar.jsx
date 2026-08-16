import { Link } from "react-router-dom"
function Navbar(){
    return(
        <header className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">Quotiva</a>
                <nav className="nav-links">
                    
                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/explore">
                        Explore
                    </Link>

                    <Link to="/categories">
                        Categories
                    </Link>

                    <Link to="/favorites">
                        Favorites
                    </Link>
                </nav>
                <button className="search-button">Search</button>
            </div>
        </header>
    )
}
export default Navbar