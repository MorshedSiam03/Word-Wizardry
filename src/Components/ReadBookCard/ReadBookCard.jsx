import PropTypes from 'prop-types'
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';
const ReadBookCard = ({ book }) => {

    const {
        bookId,
        bookName,
        author,
        image,
        category,
        rating,
        tag1,
        tag2,
        publisher,
        yearOfPublishing,
        totalPages,
      } = book;
    return (
        <div className="card m-2 text-lg lg:mx-20">
      <div className="hero-content justify-start border-2 rounded-lg lg:items-start flex-col lg:flex-row">
        <img src={image} className="lg:w-[20%] w-[60%] bg-gray-200 p-5 rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="mt-2 font-medium"> By {author}  </p>
          <div className="flex md:flex-row flex-col  gap-5 md:justify-center md:items-center justify-start items-start">
          <p className='font-bold text-lg py-2'>Tag 
          <div className="badge bg-green-100 text-green-600 font-semibold text-md mx-2 p-3"># {tag1}</div>
          <div className="badge bg-green-100 text-green-600 font-semibold text-md p-3"># {tag2}</div>
          </p>
            <div className="flex justify-center items-center gap-2">
            <CiLocationOn /> <p>Year of Publishing {yearOfPublishing}</p>
            </div>
          </div>
          <div className="mb-3 flex justify-start items-start gap-5">
            <div className="flex justify-center items-center gap-2">
            <FaUserFriends /><p>Publisher {publisher}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
            <MdContactPage /><p>Page {totalPages}</p>
            </div>
          </div>
          <hr />
          <div className="mt-3 flex md:flex-row flex-col justify-start items-start md:gap-5 gap-1">
            <button className="btn btn-sm rounded-[32px] text-[#328EFF]">Category: {category}</button>
            <button className="btn btn-sm rounded-[32px] text-[#FFAC33]">Rating: {rating}</button>
            <Link to={`/book/${bookId}`} className="btn btn-sm rounded-[32px] bg-[#23BE0A] text-white">View Details</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

ReadBookCard.propTypes = {
    book: PropTypes.any,
}

export default ReadBookCard;