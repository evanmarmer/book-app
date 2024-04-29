import { useState } from "react";
import axios from 'axios';

function BookCard(props) {

    
console.log(props.photo.thumbnail)

    return (
        <>
            <div className='book-card'>
                <img src={props.photo.thumbnail} alt='book cover'/>
            </div>
        </>    
    );
};

export default BookCard;
