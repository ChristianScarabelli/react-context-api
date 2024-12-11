import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URI } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import placeHolderImage from '../../assets/600x400_placeholder.jpg'
import Tags from "../../components/Tags/Tags"
import DeletePost from "../../components/posts/DeletePost"


export default function Show() {

    // variabile di state per il post con id (??)
    const [post, setPost] = useState(null) // null perchè ancora non esiste

    // variabile per il numero dei post per controllo per il tasto prev
    // const [postsNumber, setPostsNumber] = useState(0)

    const { id } = useParams() // destrutturo con la funzione di react per ricavare l'id

    // fetch del post per ID
    useEffect(() => {
        axios.get(`${BASE_URI}/posts/${id}`)
            .then(res => {
                setPost(res.data) // inizializzo il setter con i dati della response 
                // setPostsNumber(post.res.data.length)
            })
            .catch(err => {
                console.error(err)
            })
    }, [id]) // aggiorno la variabile ad ogni cambio dell'id

    const navigate = useNavigate() // inizializzo variabile per spostarsi tra le pagine

    // funzione prev post per spostarsi tra i post, dando un id dinamico alla funzione navigate
    function prevPosthandler() {
        if (parseInt(id) > 1) { // per non andare con id negativo
            navigate(`/posts/${parseInt(id) - 1}`)
        }
    }

    // funzione next post
    function nextPostHandler() {
        if (parseInt(id)) {
            navigate(`/posts/${parseInt(id) + 1}`)
        }
    }

    return (
        <main>
            <div className="container my-3">
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <button className="btn btn-dark" onClick={prevPosthandler}>Prev</button>
                    <button className="btn btn-dark" onClick={nextPostHandler}>Next</button>
                </div>
            </div>
            {post ?   // se post esiste, stampo le sue propietà, perchè la chiamata ad axios con useEffect è asincrona,al primo render è Null, e se non si fa la verifica rimane null e da errore 
                <>
                    <div className="container mb-4">
                        <figure>
                            <img className="img-fluid card-img-top" src={post.image ? `${BASE_URI}/${post.image}` : placeHolderImage} alt={post.title} />
                        </figure>
                        <h2>{post.title}</h2>

                        <h4 className="mt-2">{`Autore: ${post.author}`}</h4>
                        <h5 className=" mb-3 mt-2">{`Categoria: ${post.category}`}</h5>
                        <Tags tags={post.tags} />
                        <p className="card-text mt-4 mb-4">{post.content}</p>
                        <DeletePost id={post.id} onDelete={() => { navigate('/posts/') }} />
                    </div>
                </> :
                <>
                    <div className="container py-3">
                        <figure>
                            <img className="img-fluid card-top-img" src={placeHolderImage} alt="Placeholder Image" />
                        </figure>
                        <div className="placeholder-glow d-flex flex-column">
                            <h2 className="placeholder bg-primary col-4"></h2>
                            <h4 className="mt-2 placeholder bg-primary col-6"></h4>
                            <h5 className=" mb-3 mt-2 placeholder bg-primary col-6"></h5>
                            <Tags className='placeholder bg-primary col-10' />
                            <p className=" mt-2 mb-1 placeholder bg-primary col-12"></p>
                            <p className="mt-1 mb-1 placeholder bg-primary col-12"></p>
                            <p className="mt-1 mb-1 placeholder bg-primary col-12"></p>
                            <p className=" mt-1 mb-1 placeholder bg-primary col-12"></p>
                        </div>

                    </div>
                </>
            }
        </main>
    )
}