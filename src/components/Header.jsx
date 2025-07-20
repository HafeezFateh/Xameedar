import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);
    const location = useLocation();



    const toggleMenu = () => setOpen(prev => !prev);

    return(
    <div>    
        <div>
            <div id="header" className="bg-gradient-to-tr rounded-xl shadow-xl/50  m-3 mt-5 from-stone-950 via-purple-950 to-purple-900 p-[1px]">
            <div className="bg-stone-900 shadow-2xl flex justify-between items-center  rounded-xl p-5">
              <Link to='/'>
                <h1 className="text-xl font-semibold bg-gradient-to-b  from-white to-stone-300 bg-clip-text text-transparent">Xameedar</h1>
              </Link>
              <div className="text-lg  hidden lg:flex gap-10">
              <Link to="/" className={(location.pathname === "/" ? "text-purple-700 " : "text-white") +"  hover:text-purple-700 transition"}>Home</Link>
              <Link to="/about" className={(location.pathname === "/about" ? "text-purple-700 " : "text-white") + "  hover:text-purple-700 transition" }>About</Link>
              <Link to="/plots" className={(location.pathname === "/plots" ? "text-purple-700 " : "text-white") + "  hover:text-purple-700 transition" }>Plots</Link>
              <Link to="/blog" className={(location.pathname === "/blog" ? "text-purple-700 " : "text-white") + "  hover:text-purple-700 transition" }>Blog</Link>
              <a href="/#services" className="text-white hover:text-purple-700">Services</a>
              <a href="/#contactus" className="text-white hover:text-purple-700">Contact Us</a>
              </div> 

              <span  onClick={toggleMenu} className="material-symbols-outlined text-stone-200 lg:hidden "><span className="lg:hidden">menu</span></span>
            </div>
        </div>
        </div>

        {open && (
            <div id="resmenu" className="bg-gradient-to-tr rounded-xl mx-3  from-stone-950 via-purple-950 to-purple-900 p-[1px] shadow ">  
              <div  className="bg-stone-900 p-1 shadow-xl  rounded-xl">
                <Link to="/about" className="p-3 bg-stone-800 rounded-xl m-2 block text-stone-300 font-semibold">About</Link>
                <Link to="/about" className="p-3 bg-stone-800 rounded-xl m-2 block text-stone-300 font-semibold">Plots</Link>
                <Link to="/blog" className="p-3 bg-stone-800 rounded-xl m-2 block text-stone-300 font-semibold">Blog</Link>
                <a href="/#services" className="p-3 bg-stone-800 rounded-xl m-2 block text-stone-300 font-semibold">Services</a>
                <a href="/#contactus" className="p-3 bg-stone-800 rounded-xl m-2 block text-stone-300 font-semibold">Contact us</a>
              </div>
            </div>
        )

        }
      
  </div>

    )
}

export default Header;