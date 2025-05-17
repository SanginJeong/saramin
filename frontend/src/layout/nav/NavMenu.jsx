import React, { useState } from 'react'

const navMenuList = [
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
  {title: "menu 1", content: ['menu 1-1', 'menu 1-2', 'menu 1-3', 'menu 1-4']},
]

const NavMenu = () => {
  const [active, setActive] = useState(null);
  return (
    <div className='py-2 flex gap-4'>
      {navMenuList.map((menu,index)=>(
        <ul className='relative pr-4' onMouseOver={()=>setActive(index)} onMouseLeave={()=>setActive(null)}>
          <p className='hover:bg-blue-600 hover:text-white transition px-4'>{menu.title}</p>
          <ul className={`${index === active ? '' : 'hidden'} absolute -left-3 z-[100] border-1 rounded-md border-gray-400 shadow-md bg-white w-32 transition`}>
            {menu.content.map((subMenu)=>(
              <li className='text-gray-600 px-1 py-2 hover:bg-blue-600 hover:text-white transition'>{subMenu}</li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  )
}

export default NavMenu