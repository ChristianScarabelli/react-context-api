import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

// isActive non va scritto come prop di navbar perchè non viene passato direttamente al componente, ma viene gestito e conosciuto internamente solo da NavLink
// is Active è un oggetto passato a classname come callback, con operatori condizionali per gestire le 2 classi
// is Active è un oggetto con proprietà booleana, quindi se è true è active
export default function Navbar() {
    return (
        <nav className='bg-dark p-2'>
            <ul className='d-flex align-items-center justify-content-start gap-3 nav nav-underline py-1 ps-2'>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        `fs-4 nav-link ${isActive ? 'text-warning' : ''}`
                    } to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        `fs-4 nav-link ${isActive ? 'text-warning' : ''}`
                    } to='/posts'>Blog</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        `fs-4 nav-link ${isActive ? 'text-warning' : ''}`
                    } to='/about'>About Us</NavLink>
                </li>

            </ul>
        </nav >
    )
}