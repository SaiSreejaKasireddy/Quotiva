import CategoryCard from "./CategoryCard"
function Categories(){
    const categories=[
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
    return(
        <section className="categories">
            <p className="section-label">
                EXPLORE BY CATEGORY
            </p>
            <h2>
                Find the words you need
            </h2>
            <div className="category-grid">
                {categories.map((category)=>(
                    <CategoryCard
                    key={category}
                    name={category}/>
                ))}
            </div>
        </section>
    )
}
export default Categories