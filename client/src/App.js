import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import SiteHeader from "./components/SiteHeader";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
	return (
		<>
			<SiteHeader />
			<Content>
				<Switch>
					<Route exact path="/" component={SearchPage} />
					<Route path="/saved" component={SavedPage} />
				</Switch>
			</Content>
		</>
	);
};

export default App;
