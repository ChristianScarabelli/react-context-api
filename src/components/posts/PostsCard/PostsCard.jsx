import placeHolderImage from '../../../assets/600x400_placeholder.jpg'
import Tags from '../../Tags/Tags.jsx'
import DeletePost from '../../../components/posts/DeletePost.jsx'
import { BASE_URI } from '../../../config.js'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import PostsContext from '../../../contexts/PostsContext.js'

export default function PostsCard({ post = {} }) {
    const { id, title = '', image, content = '', tags = [], author = '' } = post
    const { fetchPosts } = useContext(PostsContext)

    return (
        <div className="col mb-4">
            <div className="card h-100 d-flex flex-column">
                <figure className="m-0">
                    <img className="card-img-top img-fluid" src={image ? `${BASE_URI}/${image}` : placeHolderImage} alt={title} />
                </figure>
                <div className="card-body d-flex flex-column flex-grow-1">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-subtitle mt-3 text-muted mb-2">{`Autore: ${author}`}</h4>
                    <Tags tags={tags} />
                    <p className="card-text mt-4">{content}</p>
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                        <Link className="btn btn-primary" to={`/posts/${id}`}>Vai al post</Link>
                        <DeletePost onDelete={fetchPosts} id={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
