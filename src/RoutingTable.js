import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'

const routing_table = [ 
    { title: "Home", exact: true, path: "/", component: Home}, 
    { title: "Portfolio", exact: false, path: "/portfolio"},
    { title: "Contacts", exact: false, path: "/contacts", component: Contacts}
]

export default routing_table;