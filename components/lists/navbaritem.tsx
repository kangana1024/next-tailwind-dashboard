import Link from 'next/link'
interface NavBarItemProps {
  isActive: boolean,
  isChildActive: boolean,
  href: string,
  className?: string,
  name: string,
  icon?: JSX.Element[] | JSX.Element
}

const NavBarItem = (props: NavBarItemProps) => {

  return (
    <Link href={props.href}>
      <a aria-current="page" className={(props.isActive ? "router-link-active bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100 " : " border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 ") + (props.isChildActive ? "router-link-exact-active " : "") + (props.className ? props.className : "flex items-center duration-200 mt-4 py-2 px-6 border-l-4")}>{props.icon ? props.icon : null}<span className="mx-4">{props.name}</span></a>
    </Link>)
}

export default NavBarItem