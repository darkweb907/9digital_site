import { appleImg , searchImg , bagImg } from '../utils'
import {navLinks } from '../constant'

const Header = () => {
  return (
    <header className='mt-4.25 px-8 scrim-max-width'>
      <div className= "flex justify-between items-center">
        <img src={appleImg} alt="apple" className='cursor-pointer' />
        <nav className='max-sm:hidden'>
          <ul className='flex gap-14 text-sm cursor-pointer  text-gray transition-all'>
            {navLinks.map((list , index)=>(
              <li className='hover:text-white' key={index}>{list}</li>
            ))}
          </ul>
        </nav>
        <div className="bags flex gap-7 cursor-pointer">
            <img src={searchImg} width={18} height={18} alt="search" />
            <img src={bagImg} width={18} height={18} alt="bag" />
          </div>
      </div>
      
    </header>
  )
}

export default Header