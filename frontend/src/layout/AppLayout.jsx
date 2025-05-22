import { Outlet } from 'react-router'
import NavTop from './nav/NavTop'
import NavMenu from './nav/NavMenu'
const AppLayout = () => {
  return (
    <>
      <nav className='shadow-md flex justify-center mb-8'>
        <div className='w-[80%] relative'>
          <NavTop/>
          <NavMenu/>
        </div>
      </nav>
      <div className='flex justify-center'>
        <div className="w-[80%]">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default AppLayout