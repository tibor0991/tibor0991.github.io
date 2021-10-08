import Blog from './layouts/Blog';
import { Home } from './layouts/Home';
import { Portfolio } from './layouts/Portfolio';

const routing_table = [ 
    { title: "Home", exact: true, path: "/", component: Home}, 
    { title: "Portfolio", exact: false, path: "/portfolio", component: Portfolio},
    { title: "Blog", exact: false, path: "/blog", component: Blog}
]

export default routing_table;