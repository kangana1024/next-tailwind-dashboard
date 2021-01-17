import React, { useState } from "react"
import { DashboardSettingProvider } from "../contexts/dashboad"
import HeaderLayout from "./header"
import NavBar from "./navbar"


const DashboardLayout = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [version, setVersion] = useState<number>(new Date('2012.08.10').getTime() / 1000)

  const hiddenSidbar = () => {
    setActiveMenu(false)
  }
  return (
    <>
      <DashboardSettingProvider value={{
        loading: {
          loading,
          setLoading
        },
        menu: {
          activeMenu,
          setActiveMenu
        },
        version: {
          version,
          setVersion
        }
      }} >
        <div className="flex h-screen bg-gray-200">
          <div className="flex">
            <div onClick={hiddenSidbar} className={"fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden" + (activeMenu ? " block" : " hidden")}></div>
            <div className={"fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0" + (activeMenu ? " translate-x-0 ease-out" : " -translate-x-full ease-in")}>
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#4f46e5" d="M0 0h24v24H0z"></path>
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                  </svg>
                  <span className="text-white text-2xl mx-2 font-semibold">Showkhun CMS</span>
                </div>
              </div>

              <NavBar />
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <HeaderLayout />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="container mx-auto px-6 py-8">
                {props.children}
              </div>
            </main>
          </div>
        </div>
      </DashboardSettingProvider>
    </>
  )
}

export default DashboardLayout