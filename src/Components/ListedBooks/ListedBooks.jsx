import { useState } from "react";
import { Loader } from "react-form-component";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ListedBooks = () => {

    const [tabs, setTabs] = useState(0);  

    const navigation = useNavigate();
    if(navigation.state === 'loading') 
    return <Loader></Loader>
  
    
    return (
        <div>
            <section>
            <div className="bg-[#1313130D] font-bold p-5 mb-3 rounded-lg text-center text-3xl">
                <h1>Books</h1>
            </div>  
            <div className="flex items-center rounded-lg lg:mx-20 overflow-x-auto overflow-y-hidden justify-start flex-nowrap dark:bg-base-200 dark:text-gray-800">
                <Link
                onClick={() => setTabs(0)}
                //   to={`reads`}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabs === 0 ? "border border-b-0" : "border-b"
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                <span>Read Books</span>
                </Link>
                <Link
                onClick={() => setTabs(1)}
                to={`wishlists`}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabs === 1 ? "border border-b-0" : "border-b"
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet />
            </section>
            
        </div>
    );
};

export default ListedBooks;