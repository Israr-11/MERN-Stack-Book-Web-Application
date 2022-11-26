import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper'
import { useParams } from 'react-router-dom';

function BookEdit() {
    //useParams returns an object of key/value pairs of URL parameters
    const { id } = useParams();
    //Using useState hook for setting title and author
    const [title, setTitle] = useState('');
    const [author, setauthor] = useState('');

    //useNavigate is replacement of useHistory in Latest verison of React
    const navigate = useNavigate();

    //useEffect hook for fetching data and dynamically setting title and author of book
    useEffect(() => {
        fetch(`/api/books/${id}`)
            .then(res => res.json())
            .then(book => {
                setTitle(book.title);
                setauthor(book.author);
            })
            // eslint-disable-next-line
    }, []) 

    //Its logic for fetching already filled data and Patching or updating data
    const submit = (e) => {
        e.preventDefault();
        fetch(`/api/books/${id}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, author })
        }).then(() => navigate('/books/book'));
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title"
                    defaultValue={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Author</label>
                <input type="text" name="author"
                    defaultValue={author}
                    onChange={e => setauthor(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </Wrapper>
    )
}

export default BookEdit
