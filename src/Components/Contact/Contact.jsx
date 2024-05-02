
const Contact = () => {
    return (

        <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <img src="https://i.ibb.co/HFCQkpZ/Book2.png" alt="" />
        </div>
            <div className="">
                
                <div className="lg:mt-16 lg:w-[70%] justify-center items-center  p-6">
                    <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your message"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Send Message</button>
                    </div>
                    </form>
                </div>
                </div>
        </div>
        </>
    );
};

export default Contact;