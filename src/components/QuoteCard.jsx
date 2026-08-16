function QuoteCard({quote}){
    return(
        <div className="quote-card">
            <p className="quote-text">
                "{quote.text}"
            </p>
            <p className="quote-author">
                -{quote.author}
            </p>
            <span className="quote-category">
                {quote.category}
            </span>
             <div className="quote-actions">
                <button>♡</button>
                <button>Copy</button>
                <button>Share</button>
            </div>
        </div>
    )
}
export default QuoteCard