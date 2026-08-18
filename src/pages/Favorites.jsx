import { useFavorites } from "../context/FavoritesContext"
import quotes from "../data/quotes"
import QuoteCard from "../components/QuoteCard"

function Favorites() {

    const { favorites } = useFavorites()

    const favoriteQuotes = quotes.filter(
        (quote) => favorites.includes(quote.id)
    )

    return (
        <main className="favorites-page">

            <section className="favorites-header">

                <p className="section-label">
                    YOUR COLLECTION
                </p>

                <h1>
                    Favorite Quotes
                </h1>

                <p>
                    The words you chose to keep close.
                </p>

            </section>

            {favoriteQuotes.length > 0 ? (

                <div className="quote-grid">

                    {favoriteQuotes.map((quote) => (
                        <QuoteCard
                            key={quote.id}
                            quote={quote}
                        />
                    ))}

                </div>

            ) : (

                <div className="no-favorites">

                    <h2>
                        No favorites yet
                    </h2>

                    <p>
                        Save quotes you love and
                        they'll appear here.
                    </p>

                </div>

            )}

        </main>
    )
}

export default Favorites