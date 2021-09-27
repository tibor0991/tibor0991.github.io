import { Route, Switch } from "react-router";
import FourOhFour from "./FourOhFour";

const RouteRenderer = (props) =>
<Switch>
{props.routes.map( (p) => <Route exact={p.exact} path={p.path} component={p.component} />)}
<Route component={FourOhFour} />
</Switch>;

export default RouteRenderer;