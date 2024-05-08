import { useState } from "react";
import axios from 'axios';
import './BookCard.css';


function BookCard(props) {

    const [modalIsShown, setModalIsShown] = useState(false)

    function onImgClick() {
        setModalIsShown(true);
    }

    function closeModal() {
        setModalIsShown(false);
    }

    return (
        <>
            <div className='book-card'>
                <img onClick={onImgClick} src={props?.photo?.thumbnail}/>
                { modalIsShown
                ? <>
                    <div className="modal-wrapper">
                        <div className="modal-box">
                            <div className="book-elements">
                                <h1>{props.info.volumeInfo.title}</h1>
                                <p>{props.info.volumeInfo.subtitle}</p>
                            </div>
                            <img className='img-expand' src={props.photo.thumbnail}/>
                            <button className="buttonX" onClick={closeModal}>x</button>
                        </div>
                    </div>
                </>
                : null
            }
            </div>
        </>    
    );
};

export default BookCard;
