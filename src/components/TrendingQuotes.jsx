import QuoteCard from "./QuoteCard"
import quotes from "../data/quotes"
function TrendingQuotes(){
    return(
        <section className="trending">
            <p className="section-label">
                TRENDING QUOTES
            </p>
            <h2>
                Words worth remembering
            </h2>
            <div className="quote-grid">
                {quotes.map((quote)=>(
                    <QuoteCard
                    key={quote.id}
                    quote={quote}
                    />
                ))}
            </div>
        </section>
    )
}
export default TrendingQuotes