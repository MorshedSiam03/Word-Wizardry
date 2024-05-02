import { Link, NavLink } from "react-router-dom";

const Header = () => {
 
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold">
            <NavLink   to='/' className={({isActive}) => isActive ? ' border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/ListedBooks' className={({isActive}) => isActive ? ' border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Listed Books</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/PagesToRead' className={({isActive}) => isActive ? ' border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Pages to Read</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/Contact' className={({isActive}) => isActive ? ' border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Contact Us</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/About' className={({isActive}) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>About Us</NavLink>
          </li>
          </ul>
        </div>
        <Link to='/' className="text-2xl text-[#131313] font-bold">Word Wizardry</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className="font-bold">
            <NavLink  to='/' className={({isActive}) => isActive ? 'border mx-2 border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/ListedBooks' className={({isActive}) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Listed Books</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/PagesToRead' className={({isActive}) => isActive ? 'mx-2 border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Pages to Read</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/Contact' className={({isActive}) => isActive ? ' border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>Contact Us</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/About' className={({isActive}) => isActive ? 'mx-2 border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-semibold'}>About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] text-white me-2">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;