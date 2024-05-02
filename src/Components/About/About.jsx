const About = () => {
    return (
        <div className="">
        <div className="grid col-span-1 lg:grid-cols-2">
        <div>
            <img src="https://i.ibb.co/HFCQkpZ/Book2.png" alt="" />
        </div>
        <div className="flex justify-center items-center mx-10 lg:m-0">
            <p className="text-gray-700 lg:pr-36 text-lg  font-medium text-justify">
            Welcome to our bookshop! We are passionate about books and strive to provide a wide range of titles to cater to all reading tastes. Whether you are a fan of fiction, non-fiction, mysteries, thrillers, romance, or any other genre, we have got you covered.
            <br />
            Our mission is to promote a love for reading and literacy within our community. We believe that books have the power to inspire, educate, and entertain, and we are committed to helping our customers discover their next favorite read.
            <br />
            At our bookshop, you will find a cozy atmosphere where you can browse our carefully curated selection of books, chat with our friendly staff for recommendations, and participate in book clubs and events. We also offer convenient online ordering and delivery options for those who prefer to shop from the comfort of their homes.
            <br />
            Thank you for supporting our independent bookshop. We look forward to serving you and helping you embark on many literary adventures!
            </p>           
        </div> 
        </div>
        </div>
    );
};

export default About;