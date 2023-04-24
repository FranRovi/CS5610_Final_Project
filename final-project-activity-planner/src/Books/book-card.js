import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const BookCard = (props) => {
    console.log(props);
    console.log(props.volumeInfo);
    console.log(props.id);
    console.log(props.volumeInfo.imageLinks === undefined);

    return(
        <div className='border border-primary w-25 text-center m-2'>
            <h4 className='p-1'>{props.volumeInfo.title}</h4>
            {props.volumeInfo.imageLinks === undefined ? <img alt='image not available' src='../../images/web_dev_image_na.png' width={150}/> : <img alt='book cover' src={props.volumeInfo.imageLinks.smallThumbnail} className="" height={200} width={128}/>}
            <div className="bg-dark">   
            {props.volumeInfo.authors === undefined ? <h6 className='mt-2 pt-2 text-white'>Author: N/A</h6> : <h6 className='mt-2 pt-2 text-white'>Author: {props.volumeInfo.authors[0]}</h6>}
            {props.volumeInfo.averageRating === undefined ? <p className='ms-2 text-white'>Book's Rating: N/A</p> : <p className='ms-2 text-white '>Book's Rating: {props.volumeInfo.averageRating} <AiFillStar style={{color:"yellow"}} /></p>}
            <button className="btn btn-light mb-2 text-muted"><Link to={`details/${props.id}`}>View Details</Link></button>
            </div>
        </div>
    );
}

export default BookCard;