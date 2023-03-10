import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaPinterest,
    FaInstagram,
}from 'react-icons/fa'


const Navbar = () => {
    const [nav, setnav] = useState(false);
    const [logo, setlogo] = useState(false);
    const handleNav = ()=>{
        setnav(!nav)
        setlogo(!logo)
    }


  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1  className={logo ? 'hidden' : 'block'}>BEACHES</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20} />
            <BsPerson size={20}/>
        </div>

      {/* Humburgur */}
        <div className='block md:hidden z-10' onClick={handleNav}>
            {!nav ? <HiOutlineMenuAlt3 size={20} /> : <AiOutlineClose size={20} className='text-black' />}
        </div>

          {/* Nav Manu */}
        <div onClick={handleNav} className={!nav ? 'absolute  left-[-100%] ' :'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col ease-in-out duration-[500ms]'}>
            <ul>
            <h1>BEACHSE</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6 clas'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaYoutube className='icon' />
                <FaPinterest className='icon' />
                <FaInstagram className='icon' />
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar