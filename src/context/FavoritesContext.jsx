import { createContext, useContext, useState } from "react"

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState(() => {

        const savedFavorites =
            localStorage.getItem("quotivaFavorites")

        return savedFavorites
            ? JSON.parse(savedFavorites)
            : []
    })

    const toggleFavorite = (quoteId) => {

        setFavorites((currentFavorites) => {

            let updatedFavorites

            if (currentFavorites.includes(quoteId)) {

                updatedFavorites =
                    currentFavorites.filter(
                        (id) => id !== quoteId
                    )

            } else {

                updatedFavorites = [
                    ...currentFavorites,
                    quoteId
                ]

            }

            localStorage.setItem(
                "quotivaFavorites",
                JSON.stringify(updatedFavorites)
            )

            return updatedFavorites
        })
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                toggleFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    return useContext(FavoritesContext)
}