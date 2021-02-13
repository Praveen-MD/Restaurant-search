import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/Home">
						<Home />
					</Route>
					<Route path="/Restaurant/:id">
						<Restaurant />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
