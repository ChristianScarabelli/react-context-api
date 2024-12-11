import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function DefaultLayout() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}