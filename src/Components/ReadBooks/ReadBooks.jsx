import { useEffect, useState } from "react";
import { getBooks, sortData } from "../../Utility";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => { 
        const storeBooks = getBooks();
        setBooks(storeBooks);
    }, []);

    const handleSort = (event) =>{

        const selectedValue = event.target.value;
        const sortedBooks = sortData(books, selectedValue);
        setBooks(sortedBooks);

    }

    return (
        <>
        {/* select for filter or sort */}
        <div className="flex flex-col justify-center items-center m-5">
            <select onClick={handleSort} className="select bg-[#23BE0A] text-white text-lg font-medium">
                <option disabled selected>Sort By</option>
                <option value='rating'>Rating</option>
                <option value='totalPages'>Pages</option>
                <option value='yearOfPublishing'>Year</option>
            </select>
        </div>
            <div className="grid grid-cols md:grid-cols-1 gap-5">
            {
                books.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
            </div>
            
        </>
    );
};

export default ReadBooks;