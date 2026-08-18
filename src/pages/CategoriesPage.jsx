import { Link } from "react-router-dom"
import quotes from "../data/quotes"

function CategoriesPage() {

    const categories = [
        "Motivation",
        "Success",
        "Love",
        "Life",
        "Wisdom",
        "Happiness",
        "Inspiration",
        "Mindset",
        "Change",
        "Goals",
        "Ambitions"
    ]

    const getQuoteCount = (category) => {
        return quotes.filter(
            (quote) => quote.category === category
        ).length
    }

    return (
        <main className="categories-page">

            <section className="categories-header">

                <p className="section-label">
                    CATEGORIES
                </p>

                <h1>
                    Explore by what you feel.
                </h1>

                <p>
                    Find the right words for every mood,
                    moment and mindset.
                </p>

            </section>

            <section className="categories-content">

                <div className="categories-page-grid">

                    {categories.map((category) => (

                        <Link
                            key={category}
                            to={`/explore?category=${category}`}
                            className="category-page-card"
                        >

                            <div>
                                <h2>{category}</h2>

                                <p>
                                    {getQuoteCount(category)} quotes
                                </p>
                            </div>

                            <span>
                                Explore →
                            </span>

                        </Link>

                    ))}

                </div>

            </section>

        </main>
    )
}

export default CategoriesPage