import { useState } from 'react';
import axios from 'axios';

export default function Explore() {
    
    let key = 'AIzaSyCQFKxc-Tfi9jV-txgcO-MDRnZ89WzQu2Y'

    const [searchTerm, setSearchTerm] = useState('');
    const [bookInfo, setBookInfo] = useState([])

    function handleSearch(e) {
        e.preventDefault()
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`)
        .then((response) => {
        //   setBookInfo();
          console.log(response.data);
        });
      }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
           handleSaveClick(e)
        }
    }


    return (
        <>
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