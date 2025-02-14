import { NavLink } from "react-router-dom";

const Navbar = () => {
      const links = <div className="text-[10px] lg:flex font-semibold text-base-900 ">
        <li className=" hover:underline  "> <NavLink to={'/'} >HOME</NavLink> </li>
        
        <li className=" hover:underline" > <NavLink to={'/About'} >ABOUT</NavLink> </li>
        <li className=" hover:underline" > <NavLink to={'/Menu'} >MENU</NavLink> </li>
        

        <li className=" hover:underline" > <NavLink to={'/Contact'} >CONTACT</NavLink> </li>
        
      </div>
      return (
            <div className="flex justify-between items-center">
                 <div className="">
                  
                 <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className= "lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="font-bold text-4xl"><div><span className="text-red-900" >F</span>ood Con<span className="text-red-900">n</span>ect </div> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ml-72">
      {links}
    </ul>
  </div>
   
  </div>
</div>
<a className="btn text-[15px] text-base-700 font-bold">Login</a>
</div>
           
      );
};

export default Navbar;