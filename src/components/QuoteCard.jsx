import {useState} from "react"
import { useFavorites } from "../context/FavoritesContext"
import {Link} from "react-router-dom"

function QuoteCard({ quote }) {

    const {
        favorites,
        toggleFavorite
    } = useFavorites()
    const [shared,setShared]=useState(false)
    const [copied,setCopied]=useState(false)

    const isFavorite =
        favorites.includes(quote.id)
    const handleCopy=async()=>{
        const textToCopy=
        `"${quote.text}" — ${quote.author}`

        await navigator.clipboard.writeText(textToCopy)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }
    const handleShare=async ()=>{
        const shareText =
    `"${quote.text}" — ${quote.author}`
        if(navigator.share){
            await navigator.share({
                title:"Quotiva",
                text:shareText
            })

        }
        else{
            await navigator.clipboard.writeText(shareText)
            setShared(true)
            setTimeout(()=>{
                setShared(false)
            },2000)
        }
    }

    return (
        <div className="quote-card">

            <Link
    to={`/quote/${quote.id}`}
    className="quote-link"
>
    <p className="quote-text">
        “{quote.text}”
    </p>
</Link>

            <p className="quote-author">
                — {quote.author}
            </p>

            <span className="quote-category">
                {quote.category}
            </span>

            <div className="quote-actions">

                <button
                    onClick={() =>
                        toggleFavorite(quote.id)
                    }
                    className={
                        isFavorite
                            ? "favorite active"
                            : "favorite"
                    }
                >
                    {isFavorite ? "♥" : "♡"}
                </button>
                <button onClick={handleCopy}>
                    {copied ? "Copied!" :"Copy"}
                </button>

                    <button onClick={handleShare}>
                        {shared ? "Link Copied!" : "Share"}
                    </button>
                

               

            </div>

        </div>
    )
}

export default QuoteCard