import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div class="sidebar">
            <ul class="side-menu">
                <li><Link to="/books/book">Display Books</Link></li>
                <li><Link to='/books/create'>Add Book</Link></li>
            </ul>
        </div>
    )
}

export default SideBar
