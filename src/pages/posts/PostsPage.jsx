import PostsList from "../../components/posts/PostsList"
import { useContext, useEffect } from "react"
import PostsContext from "../../contexts/PostsContext.js"


export default function PostPage() {

    const { categories, fetchCategories } = useContext(PostsContext)

    // fetch delle categorie solo al primo montaggio del componente
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center display-3">Lista delle ricette</h2>
            </div>
            <div className="container mb-3">
                <h2 className="text-center py-2">Blog Categories</h2>
                <div className="d-flex justify-content-center" >
                    {categories.map((category) =>
                        <span className="badge rounded-pill text-bg-info me-3" key={category.id}>{category.name}</span>
                    )}
                </div>
            </div>
            <div>
                <PostsList />
            </div>
        </>
    )
}