import React, { useState, useEffect, useRef } from "react";
import logonavbar from "../../assets/logonavbar.png";
import user from "../../assets/user-solid.svg";
import dropdowm from  '../../assets/dropdown.svg'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
 const [filterName,setFilterName] = useState("");
 const [type,setType] = useState("");
  const dropdown = useRef(null);
let navigate = useNavigate()
  const role = localStorage.getItem("role")
  const accesToken = localStorage.getItem("accessToken");
  useEffect(() => {

    if (!showDropDown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropDown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropDown]);

const handleLogOut = () => {
  navigate('/')
localStorage.removeItem("accessToken")
localStorage.removeItem("role")
}
  return (
    <div className="flex justify-around m-auto items-center pt-3  overflow-x-hidden bg-slate-50 pb-3  ">
      <div>
        <Link to={'/menu'}>
        <img
          src={logonavbar}
          className=" w-32 md:w-32 lg:w-48"
   
        />
        </Link>

      </div>
      <div className='flex gap-8'>
        <Link to={'/profiel'}>
        <h1 className='text-sm font-semibold leading-4'>Profile</h1>
        </Link>
       
        <Link to={'/dashboard'}>
        <h1 className='text-sm font-semibold leading-4'>Dashboard</h1>
        </Link>
     
     </div>
      <div className="flex gap-7 pr-8 ">
     
        <img src={user} width={20} height={100} />
        <h1 className="pt-2 flex m-auto items-center gap-4 ">
        {role}
        
        <button
                type="button"
                className="  text-white bg-yellow-500 border border-yellow-500 py-1.5 px-2 rounded-xl"
                onClick={handleLogOut}
              >
                LogOut
              </button>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
