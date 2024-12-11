import PostsList from "../../components/posts/PostsList"

export default function postPage() {
    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center display-3">Lista delle ricette</h2>
            </div>
            <div>
                <PostsList />
            </div>
        </>
    )
}