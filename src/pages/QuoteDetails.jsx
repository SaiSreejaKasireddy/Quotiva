import { Link, useParams } from "react-router-dom"
import quotes from "../data/quotes"
import QuoteCard from "../components/QuoteCard"

function QuoteDetails() {

    const { id } = useParams()

    const quote = quotes.find(
        (quote) => quote.id === Number(id)
    )

    if (!quote) {
        return (
            <main className="quote-details-page">

                <h1>
                    Quote not found
                </h1>

                <Link to="/explore">
                    ← Back to Explore
                </Link>

            </main>
        )
    }

    return (
        <main className="quote-details-page">

            <div className="quote-details-card">

                <p className="section-label">
                    {quote.category}
                </p>

                <blockquote>
                    “{quote.text}”
                </blockquote>

                <p className="quote-details-author">
                    — {quote.author}
                </p>

                <QuoteCard quote={quote} />

                <Link
                    to="/explore"
                    className="back-link"
                >
                    ← Back to Explore
                </Link>

            </div>

        </main>
    )
}

export default QuoteDetails