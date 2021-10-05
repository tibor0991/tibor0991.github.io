
import { Navbar, Footer } from './Components';
import routing_table from './RoutingTable';
import RouteRenderer from './RouteRenderer';

function App() {
  return (
    <div className="App">
      <Navbar routes={routing_table} />
      <RouteRenderer routes={routing_table} />
    </div>
  );
}

export default App;
