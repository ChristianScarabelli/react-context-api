import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URI } from '../../config.js'
import { Link } from "react-router-dom"
import PostsCard from './PostsCard/PostsCard.jsx'

export default function PostsList() {

    // variabile di stato per i posts
    const [posts, setPosts] = useState([])

    // funzione per il fetch dei dati dal server
    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => {
                setPosts(res.data) // riempio variabile di stato con i dati dal server
            })
            .catch(err => {
                console.error(err)
            })
    }

    // faccio il fetch solo al primo montaggio del componente
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <main>
            <section className="py-5">
                <div className="container mb-3">
                    <h2 className="display-6 text-center py-2">Blog Posts</h2>
                    <Link className="btn btn-primary" to='/posts/create'>Crea Post</Link>
                </div>
                <div className="container">
                    <div className="row row-cols-2">
                        {posts.map((post) =>
                            <div key={post.id}>
                                {/* passo la prop della card onDelete che invoca la callback deletePost, e passo la funzione per rifare il fetch dei post */}
                                <PostsCard onDelete={() => fetchPosts()} post={post} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}