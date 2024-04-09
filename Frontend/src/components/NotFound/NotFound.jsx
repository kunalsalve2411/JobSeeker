import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className='page notfound'>
            <div className='content'>
                <img src="/image.jpg" alt="notfound" />
                <Link to={"/"}>RETURN TO HOME</Link>

            </div>

        </section>
    )
}

export default NotFound
