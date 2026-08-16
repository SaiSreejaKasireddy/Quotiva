import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import CategoriesPage from "./pages/CategoriesPage"
import Favorites from "./pages/Favorites"

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App