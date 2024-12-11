import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import PostsPage from './pages/posts/PostsPage.jsx'
import PostsShow from './pages/posts/Show.jsx'
import PostsCreate from './pages/posts/Create.jsx'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import BlankLayout from './layouts/BlankLayout.jsx'
import NotFound from './pages/NotFound.jsx'
import PostsContext from './contexts/PostsContext.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from './config.js'

function App() {

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

  // variabile di stato per categories
  const [categories, setCategories] = useState([])

  // funzione per il fetch dei dati dal server
  function fetchCategories() {
    axios.get(`${BASE_URI}/categories`)
      .then(res => {
        setCategories(res.data) // riempio variabile di stato con i dati dal server
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <>
      <PostsContext.Provider value={{ posts, fetchPosts, categories, fetchCategories }} >
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/about' element={<AboutUs />}></Route>
              <Route path='/posts'>
                <Route index element={<PostsPage />}></Route>
                <Route path=':id' element={<PostsShow />}></Route>
                <Route path='create' element={<PostsCreate />}></Route>
              </Route>
            </Route>
            <Route element={<BlankLayout />}>
              <Route path='*' element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </>
  )

}

export default App
