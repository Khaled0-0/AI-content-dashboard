import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'




const Sidebar = () => {

   const { activeMenu, setActiveMenu, screenSize } = useStateContext()
   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
   const handleCloseSideBar = () => {
      if (activeMenu && screenSize <= 900) {
         setActiveMenu(false)
      }
   }

   return (
      <div className='h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto'>
         {activeMenu && (
            <>
               <div className='flex items-center justify-between'>
                  <Link
                     to='/'
                     onClick={handleCloseSideBar}
                     className='flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
                  >
                     <SiShopware /> <span>Shoppy</span>
                  </Link>
                  <button
                     type='button'
                     onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                     style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                     className='block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden'
                  >
                     <MdOutlineCancel />
                  </button>
               </div>
               <div className='mt-10'>
                  {links.map((item) => (
                     <div key={item.title}>
                        <p className='m-3 mt-4 text-gray-400 uppercase'>{item.title}</p>
                        {item.links.map((link) => (
                           <NavLink
                              to={`/${link.name}`}
                              key={link.name}
                              onClick={handleCloseSideBar}
                              style={({ isActive }) => ({
                                 backgroundColor: isActive ? 'blue' : '',
                              })}
                              className={({ isActive }) =>
                                 isActive ? activeLink : normalLink
                              }
                           >
                              {link.icon}
                              <span className='capitalize'>{link.name}</span>
                           </NavLink>
                        ))}
                     </div>
                  ))}
               </div>
            </>
         )}
      </div>
   )

}

export default Sidebar
