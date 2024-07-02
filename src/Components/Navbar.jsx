import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { logo } from '../assets/images';

const Navbar = () => {
      let Links =[
        {name:"HOME",link:"/"},
        {name:"Catalogs",link:"catalogs"},
        {name:"Book Fairs",link:"book-fairs"},
        {name:"Book Clubs",link:"book-clubs"},
      ];

      let [open,setOpen]=useState(false);

  return (
    <div className='  w-full top-0 left-0 bg-[#004B11] ' >
      <div className='md:flex items-center justify-between py-1 md:px-10 px-7'>
      <div>
          <a href="/" className=' md:ml-10'>
            <img src={logo} alt="logo" className='py-2 mb-1' />
          </a>
       </div>
       <div>
        <input type="text" />
       </div>
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {open ?<CgClose/> : <BiMenu />}
       </div>
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 rounded-b-2 bg-[#004B11] ease-in ${open ? 'top-20':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8   md:my-0 my-7'>
              <a href={link.link} className=' hover:text-[#F36868] active:text-[#F36868] rounded-lg px-4 py-1 hover:border-2 border-double duration-500 text-lg font-inter text-white font-semibold'>{link.name}</a>
            </li>
          ))
        }
       </ul>
      </div>
    </div>
   )
 }

export default Navbar
