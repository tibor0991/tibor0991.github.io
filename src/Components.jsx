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
  <div className="rounded shadow-lg">
    <div className="aspect-w-2 aspect-h-1">
      <img className="object-cover rounded-t" src={props.img} alt={props.img} />
    </div>
    <div className="p-2">
      <p className="text-2xl text-white text-center font-header">{props.title}</p>
      <p>
        {props.description}
      </p>
    </div>
  </div>

export const Footer = (props) =>{
  <div>

  </div>
}

export const Section = (props) =>
<section className="container mx-auto flex flex-col gap-2 p-4 text-white">
  <h1 className="text-center">{props.title}</h1>
  {props.children}
</section>