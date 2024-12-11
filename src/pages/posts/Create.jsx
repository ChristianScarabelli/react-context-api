import axios from "axios"
import { useState } from "react"
import { BASE_URI } from "../../config"
import { Navigate, useNavigate } from "react-router-dom"

// oggetto di stato con dati iniziali del form
const initialFormData = {
    title: '',
    author: '',
    content: '',
    image: '',
    published: true,
    tags: ''
}

export default function Create() {

    // variabile di stato per i dati del form (di default con l'oggetto vuoto)
    const [formData, setFormData] = useState(initialFormData)

    // variabile che contiene la funzione react per spostarsi tra le pagine
    const navigate = useNavigate()

    // funzione per gestire i dati del form
    function handleFormData(event) {
        const key = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        // connetto i valori degli input del form con la setter dei dati 
        setFormData({
            ...formData,
            [key]: value
        })
    }

    // funzione per salvare l'elemento
    function savePost(event) {
        event.preventDefault() // impedisco il riavvio della pagina

        // oggetto che salva i dati che verranno inviati al server con la richiesta post
        // contiene tutti i dati del form e i tag trasformati in array
        const body = {
            ...formData,
            tags: formData.tags.split(',').map((tag) => tag.trim())
        }

        // chiamata axios post per inviare i dati di body, ricavati dal form, al server 
        axios.post(`${BASE_URI}/posts`, body)
            .then(res => {
                // variabile che contiene il nuovo elemento con i dati ricevuti
                const newPost = res.data

                // invoco navigate per switchare la pagina alla rotta show del nuovo elemento
                navigate(`/posts/${newPost.id}`)
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <main>
            <section>
                <div className='container-md'>
                    <h2 className='display-3 text-center my-4'>Nuovo post</h2>
                </div>
                <div className="container-md mb-4">
                    <form onSubmit={savePost} className="bg-light p-4 rounded shadow-sm">
                        <div className='mb-3'>
                            <label className='form-label' htmlFor="title">Titolo</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id='title'
                                name='title'
                                className='form-control'
                                placeholder='Titolo del post'
                                value={formData.title}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor="image">Immagine</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id='image'
                                name='image'
                                className='form-control'
                                placeholder='URL immagine del post'
                                value={formData.image}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor="author">Autore</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id='author'
                                name='author'
                                className='form-control'
                                placeholder="Autore dell'articolo"
                                value={formData.author}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor="content">Contenuto</label>
                            <textarea
                                onChange={handleFormData}
                                type="text"
                                id='content'
                                name='content'
                                className='form-control'
                                placeholder="Contenuto dell'articolo"
                                value={formData.content}>
                            </textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                onChange={handleFormData}
                                type="checkbox"
                                checked={formData.published}
                                id='published'
                                name='published'
                                className='form-check-input'
                            />
                            <label className='form-check-label' htmlFor="published">Pubblica il post</label>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor="tags">Tags</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id='tags'
                                name='tags'
                                className='form-control'
                                placeholder='Inserisci i tags separati da virgola'
                                value={formData.tags}
                            />
                            <small className="form-text text-muted">Separa i tags usando la virgola (es: sport, notizie, tech)</small>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3">Salva</button>
                    </form>
                </div>
            </section>
        </main>
    )

}