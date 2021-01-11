import { useRouter } from 'next/dist/client/router'
import NavMenus from '../datas/nav'
import NavBarItem from '../lists/navbaritem'

const NavBar = () => {
  const router = useRouter()
  return (<nav className="mt-10">
    {
      NavMenus.menu.map((menu) => {
        return <NavBarItem key={'menu' + menu.name} href={menu.href} icon={menu.icon} name={menu.name} isActive={router.pathname === menu.href} isChildActive={false} />
      })
    }
  </nav>)
}

export default NavBar