function QuoteOfTheDay() {

    const quote =
        "The only way to do great work is to love what you do."

    const author = "Steve Jobs"

    return (
        <section className="quote-day">

            <p className="section-label">
                QUOTE OF THE DAY
            </p>

            <blockquote>
                “{quote}”
            </blockquote>

            <p className="quote-author">
                — {author}
            </p>

            <button className="save-quote">
                ♡ Save Quote
            </button>

        </section>
    )
}

export default QuoteOfTheDay