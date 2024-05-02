import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-12 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img src='https://i.ibb.co/vL405m9/404-page-not-found-illustration-1024x499-muqmchqg.png' alt="" />
                <div className='max-w-md text-center'>
                
                <p className='text-2xl font-bold lg:text-4xl mb-8'>Your Page is not Found</p>
                <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-blue-200 hover:bg-blue-300 text-gray-900'
                >
                    Back to homepage
                </Link>
                </div>
            </div>
            </section>
        </div>
    );
};

export default ErrorPage;