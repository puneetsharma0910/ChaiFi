import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white flex justify-between min-h-[50px] items-center" >
      <h1 className="font-bold text-2xl flex justify-center items-center gap-0 p-0 ">
        <span> <img src="tea.gif" width={43} alt="" /></span>
       GetMeChai!</h1>

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li> 
        <li>Projects</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
