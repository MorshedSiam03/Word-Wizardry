
const Banner = () => {
    return (
        <div>

            <div className="hero rounded-[20px] mt-5 bg-base-200">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <img src="https://i.ibb.co/CHxw0fB/Banner.png" className="" />
                <div className="mx-10 mb-10">
                <h1 className="text-5xl font-bold">Discover Your Next Favorite Story Here</h1>
                <p className="py-3 text-justify">Welcome to Word Wizardry, where storytelling takes center stage. Lose yourself in our diverse selection of books and uncover hidden gems that will become cherished favorites.</p>
                <a href="#books" className="btn  bg-blue-300">Get Started</a>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;