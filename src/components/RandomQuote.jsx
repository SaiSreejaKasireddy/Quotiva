import { useState } from "react"
import quotes from "../data/quotes"

function RandomQuote() {

    const [randomQuote, setRandomQuote] = useState(null)

    const getRandomQuote = () => {

        const randomIndex =
            Math.floor(Math.random() * quotes.length)

        setRandomQuote(quotes[randomIndex])
    }

    return (
        <section className="random-quote">

            <p className="section-label">
                NEED SOME INSPIRATION?
            </p>

            <h2>
                A little wisdom for your day.
            </h2>

            <button
                className="inspire-button"
                onClick={getRandomQuote}
            >
                Inspire Me
            </button>

            {randomQuote && (

                <div className="random-quote-card">

                    <p className="random-quote-text">
                        “{randomQuote.text}”
                    </p>

                    <p className="random-quote-author">
                        — {randomQuote.author}
                    </p>

                    <span className="quote-category">
                        {randomQuote.category}
                    </span>

                </div>

            )}

        </section>
    )
}

export default RandomQuote