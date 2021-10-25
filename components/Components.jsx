
import Link from "next/link"
import Image from "next/image"



export const Card = (props) => 
  <div className="rounded shadow-lg">
    <div className="aspect-w-2 aspect-h-1">
      <Image className="object-cover rounded-t" src={props.img} alt={props.img}/>
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

export const GridView = (props) =>
<div className={`grid lg:grid-cols-${props.columns} grid-cols-${props.columns/2} gap-4`}>
  {props.children}
</div>

export const ProjectCard = (props) =>
<Link className="group ring-white ring-0 hover:ring-2 shadow rounded-lg overflow-hidden">
    <div className="aspect-w-1 aspect-h-1">
      <img src={props.preview} alt={props.title} className="object-cover filter blur-0 group-hover:blur saturate-100 group-hover:saturate-50"/>
      <div className="grid grid-flow-rows grid-rows-2 text-center p-4 text-shadow">
        <div className="text-4xl font-bold self-end">{props.title}</div>
        <div className="text-xl text-transparent group-hover:text-white self-start transition duration-200 text-shadow-none group-hover:text-shadow">{props.subtitle}</div>
      </div>
  </div>
</Link>