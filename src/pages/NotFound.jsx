import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main>
            <section className='vh-100 vw-100 d-flex justify-content-center align-items-center bg-dark flex-column gap-3'>
                <h1 className='text-white display-1'>404</h1>
                <span className='text-white fs-4'>Page Not Found!</span>
                <Link to='/'>Go back to homepage</Link>
            </section>
        </main>
    )
}