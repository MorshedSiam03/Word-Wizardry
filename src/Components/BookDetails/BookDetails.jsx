import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getBooks, getWishlist, saveBooks, saveWishlists } from "../../Utility";


const BookDetails = () => {
    const books = useLoaderData();
    const{ bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt)
    const {
        bookName,
        author,
        image,
        category,
        tag1,
        tag2,
        rating,
        review,
        publisher,
        yearOfPublishing,
        totalPages,
      } = book;

      const savedBooks = getBooks();
      const savedWishlist = getWishlist();

      const handleBook = (book) =>{
        const isExistingInWishlist = savedWishlist.find(books => books.bookId === book.bookId);
        if (isExistingInWishlist) {
            return toast.error("Already saved in wishlist!");
          }
        saveBooks(book);
        // toast.success('Successful');
      }
      const handleWishlist = (book) =>{
        const isExistingInBooks = savedBooks.find(books => books.bookId === book.bookId);
        if (isExistingInBooks) {
      return toast.error("Already saved in books!");
    }
        saveWishlists(book);
        // toast.success('Successful');
      }



    return (
        <>
        <div className="grid px-10 grid-cols-1 mt-5 lg:grid-cols-2">
            <div className="flex justify-center bg-slate-100 rounded-xl p-10 ">
                <figure><img src={image} alt="Books" width={300} /></figure>
            </div>
            <div className="lg:mx-8">
                <h1 className=" text-[34px] lg:text-5xl font-bold ">{bookName}</h1>
                <h2 className="text-xl font-medium py-3">By: {author}</h2>
                <hr />
                <h3 className="py-2 text-lg ">{category}</h3>
                <hr />
                <p className="font-bol py-2">Review: <span className="font-normal">{review}</span></p>
                <div className="py-2 pb-3"> 
                <p className="font-bold">Tag:  
                    <div className="badge bg-green-100 text-green-600 font-semibold text-md mx-2 p-3"># {tag1}</div>
                    <div className="badge bg-green-100 text-green-600 font-semibold text-md p-3"># {tag2}</div>
                </p>
                </div>
                <hr />
                <div className="flex">
                <div className="">
                <p className="py-2">Number of Pages:</p>
                <p className="py-1">Publisher:</p>
                <p className="py-1">Year of Publishing:</p>
                <p className="py-1">Rating:</p>
                </div>
                <div className=" ml-1 lg:ml-10 font-medium ">
                    <p className="py-2">{totalPages}</p>
                    <p className="py-1">{publisher}</p>
                    <p className="py-1">{yearOfPublishing}</p>
                    <p className="py-1">{rating}</p>
                </div>
                </div>

                
                <Link onClick={() => handleBook(book)} className="btn btn-active border-1 font-medium border-black px-6 bg-transparent hover:bg-[#23BE0A] hover:text-white">Read</Link>
                <Link onClick={() => handleWishlist(book)}  className="btn btn-active bg-[#50B1C9] hover:bg-[#19829c] m-2 text-white">Wishlist</Link>
                

            </div>

        </div>
        </>
    );
};

export default BookDetails;