import { useEffect, useState } from "react";
import { getWishlist, sortData } from "../../Utility";


const SortedData = () => {

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const storeBooks =getWishlist();
        setBooks(storeBooks);
    },[]);

    const handleSort = (event) =>{
        const selectedValue = event.target.value;
        const sortedBooks = sortData(books, selectedValue);
        setBooks(sortedBooks);
    }

    return (
        <div>
             <div className="flex flex-col justify-center items-center m-5">
            <select onClick={handleSort} className="select bg-[#23BE0A] w-[10%] text-white text-lg font-medium">
                <option disabled selected>Sort By</option>
                <option value='rating'>Rating</option>
                <option value='totalPages'>Pages</option>
                <option value='yearOfPublishing'>Year</option>
            </select>
        </div>
            
        </div>
    );
};

export default SortedData;