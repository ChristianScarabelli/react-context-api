import axios from "axios"
import { BASE_URI } from "../../config"

export default function DeletePost({ onDelete = () => { }, id }) {

    // funzione per eliminare un post
    function deletePost() {
        // chiediamo conferma all'utente
        if (confirm('Vuoi davvero eliminare questo post?')) {

            axios.delete(`${BASE_URI}/posts/${id}`)
                .then(() => {
                    // invochiamo la funzione onDelete all'arrivo della richiesta
                    onDelete()
                })
                .catch(err => {
                    alert('Non è stato possibile eliminare questo post')
                    console.error(err)
                })
        }
    }
    return (
        <button className="btn btn-danger" onClick={deletePost}>Delete</button>
    )
}