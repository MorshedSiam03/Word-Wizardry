import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {

    const books = useLoaderData();

    return (
        <div>
            <h1 id="books" className="flex justify-center mt-16 text-5xl font-serif font-bold">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>) 
                }
            </div>
        </div>
    );
};



export default Books;