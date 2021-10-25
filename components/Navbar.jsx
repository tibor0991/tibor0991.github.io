import Link from 'next/link'

export default function Navbar({rootPages}){ 
    return (
    <header>
      <div className="container mx-auto">
        <nav className="mx-auto flex flex-wrap items-center text-base md:justify-center justify-between">
          {rootPages.map( (page) => <NavbarItem key={page.title} path={page.href}>{page.title}</NavbarItem> )}
        </nav>
      </div>
    </header>)
}

export function NavbarItem({children, path}){
  return(<div className="
  transition duration-200
  mx-5 px-1 pt-4 font-header font-bold text-white border-b-4 border-transparent
  hover:border-white"><Link href={path} >
      {children}
    </Link></div>)
}