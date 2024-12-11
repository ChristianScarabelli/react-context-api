import style from './Header.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import lightsaber from '../../assets/purple-light-saber.gif'

export default function Header() {
    return (
        <>
            <header>
                <div className='d-flex align-items-center justify-content-center'>
                    <h1 className='display-2 text-light py-4'>Ricette</h1>
                </div>
                <Navbar />
            </header>
        </>
    )
}