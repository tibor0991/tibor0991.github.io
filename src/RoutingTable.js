import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

const routing_table = [ 
    { title: "Home", exact: true, path: "/", component: Home}, 
    { title: "Portfolio", exact: false, path: "/portfolio", component: Portfolio},
    { title: "Blog", exact: false, path: "/blog"}
]

export default routing_table;