import { useState } from "react"
import {useSearchParams} from "react-router-dom"
import quotes from "../data/quotes"
import QuoteCard from "../components/QuoteCard"

function Explore() {

    const [searchParams] = useSearchParams()

const categoryFromUrl =
    searchParams.get("category")

const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl || "All")
    const [searchTerm, setSearchTerm] = useState("")

    const categories = [
        "All",
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

    const filteredQuotes = quotes.filter((quote) => {

        const matchesCategory =
            selectedCategory === "All" ||
            quote.category === selectedCategory

        const matchesSearch =
            quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            quote.author.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesCategory && matchesSearch
    })

    return (
        <main className="explore-page">

            <section className="explore-header">

                <p className="section-label">
                    EXPLORE
                </p>

                <h1>
                    Find the words you need.
                </h1>

                <p>
                    Explore quotes across different categories
                    and discover something that speaks to you.
                </p>

            </section>

            <section className="explore-content">

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search quotes or authors..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />

                </div>

                <div className="category-filter">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={
                                selectedCategory === category
                                    ? "active"
                                    : ""
                            }
                        >
                            {category}
                        </button>
                    ))}

                </div>
               {filteredQuotes.length > 0 ? (

    <div className="quote-grid">

        {filteredQuotes.map((quote) => (
            <QuoteCard
                key={quote.id}
                quote={quote}
            />
        ))}

    </div>

) : (

    <div className="no-results">
        <h2>No quotes found</h2>
        <p>Try a different keyword or category.</p>
    </div>

)}
                

            </section>

        </main>
    )
}

export default Explore