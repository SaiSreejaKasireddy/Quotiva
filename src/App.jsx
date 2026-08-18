import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavoritesProvider } from "./context/FavoritesContext"
import QuoteDetails from "./pages/QuoteDetails"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import CategoriesPage from "./pages/CategoriesPage"
import Favorites from "./pages/Favorites"

function App() {
    return (
        <BrowserRouter>

            <FavoritesProvider>

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route
    path="/quote/:id"
    element={<QuoteDetails />}
/>
                </Routes>

            </FavoritesProvider>

        </BrowserRouter>
    )
}

export default App