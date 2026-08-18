
import Hero from "../components/Hero"
import QuoteOfTheDay from "../components/QuoteOfTheDay"
import Categories from "../components/Categories"
import TrendingQuotes from "../components/TrendingQuotes"
import RandomQuote from "../components/RandomQuote"
function Home(){
    return(
        <>
        
        <Hero />
        <QuoteOfTheDay />
        <Categories />
        <TrendingQuotes />
        <RandomQuote/>
        
        </>
    )
}
export default Home