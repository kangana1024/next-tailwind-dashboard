import Image from 'next/image'
import { useContext, useState } from 'react'
import DashboardSetting, { DashboardSettingType } from '../contexts/dashboad'
const HeaderLayout = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const toggle = (e: any) => {
    e.preventDefault()
    setMenuActive(!menuActive)
  }
  const activeSidebar = (e: any) => {
    e.preventDefault()
    menu.setActiveMenu(true)
  }
  const { menu } = useContext<DashboardSettingType>(DashboardSetting)
  return (<header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-pink-600">
    <div className="flex items-center">
      <a href="#" aria-label="Open Menu" onClick={activeSidebar} className="text-gray-500 focus:outline-none lg:hidden">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="hidden">Openmenu</span>
      </a>
      <div className="relative mx-4 lg:mx-0">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center"><svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span><form onSubmit={(e) => e.preventDefault()} action="/admin"><label aria-label="Search"><input className="form-input py-2 w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" id="search" name="search" type="text" placeholder="Search" /></label></form>
      </div>
    </div>
    <div className="flex items-center">
      <a href="#" aria-label="Notification" className="flex mx-4 text-gray-600 focus:outline-none"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>

      <div className="relative">
        <a href="#" onClick={toggle} className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
          <Image
            src="/images/8805790.jpeg"
            alt="Picture of the author"
            className="h-full w-full object-cover"
            width={32}
            height={32}
          />
        </a>
        <div onClick={toggle} className={"fixed inset-0 h-full w-full z-10" + (!menuActive ? " hidden" : "")}></div>
        <div className={"absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20" + (!menuActive ? " hidden" : "")}>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Log out</a>
        </div>
      </div>
    </div>
  </header>)
}

export default HeaderLayout