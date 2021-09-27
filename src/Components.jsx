import { Link } from "react-router-dom"

export const Navbar = (props) => 
    <header>
      <div className="container mx-auto">
        <nav className="mx-auto flex flex-wrap items-center text-base md:justify-center justify-between">
            {props.routes.map( (route) => <Link className="navbar-item" to={route.path}>{route.title}</Link>)}
        </nav>
      </div>
    </header>

export const Button = (props) => <button className="btn">{props.children}</button>

export const Card = (props) => 
<div className="rounded border-2 p-2">
<p className="text-2xl text-white text-center font-header">{props.title}</p>
<div className="aspect-w-2 aspect-h-1">
  <img className="object-cover rounded" src={props.img} alt={props.img}/>
</div>
<p>
  {props.description}
</p>
</div>