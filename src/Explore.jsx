import { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

export default function Explore() {
    
    let key = 'AIzaSyCQFKxc-Tfi9jV-txgcO-MDRnZ89WzQu2Y'

    const [searchTerm, setSearchTerm] = useState('');
    const [bookInfo, setBookInfo] = useState([])

    function handleSearch(e) {
        e.preventDefault()
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=35&key=${key}`)
        .then((response) => {
          setBookInfo(response.data.items.filter((book) => book?.volumeInfo?.imageLinks?.thumbnail));
        });
      }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
           handleSearch(e)
        }
    }

    return (
        <>
             <div className='book-grid'>
                {bookInfo.map((book) => {
                 return <BookCard photo={book.volumeInfo.imageLinks} info= {book}/>
                })}
            </div>
            <div className="search">
                <form onSubmit={handleSearch}>
                    <input className="input"
                        type="text"
                        onKeyDown={handleKeyDown}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                    />
                    <button className="searchBtn">Search</button>
                </form>
            </div>
        </>
    )
}