import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {
        bookId,
        image,
        bookName,
        author,
        rating, 
        category,
        tag1,
        tag2
    } = book;
    return (
        <div  className='mb-5'>
            <Link to={`/book/${bookId}`}><div className="card  h-[600px] p-5 bg-base-100 shadow-xl">
            <div>
             <figure ><img src={image} alt="Shoes" width="250" height="150" className="bg-gray-100 p-10" /></figure>
             </div>
                <div className="card-body">
                <div>
                <div className="badge bg-green-100 text-green-600 font-semibold text-md p-3">{tag1}</div>
                <div className="badge bg-green-100 text-green-600 font-semibold text-md mx-2 p-3">{tag2}</div>
                </div>
                <h2 className="card-title font-serif pt-2 text-2xl">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr></hr>
                    <div className="card-actions justify-between">
                    <div className="">{category}</div> 
                    
                    <div className=" flex items-center gap-1">  {rating}  <FaRegStar/> </div> 
                                  
                   </div>
                </div>
            </div></Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.any,
}


export default Book;