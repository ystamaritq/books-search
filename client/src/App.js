import React from "react";
import { Route, Switch } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SiteBanner from "./components/SiteBanner";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import "antd/dist/antd.css";
import "./app.css";
import { Layout } from "antd";

const App = () => {
	const { Content } = Layout;
	return (
		<Layout>
			<SiteHeader />
			<Layout>
				<Content className="site-layout">
					<SiteBanner />
					<Switch>
						<Route exact path="/" component={SearchPage} />
						<Route path="/search" component={SearchPage} />
						<Route path="/saved" component={SavedPage} />
					</Switch>
				</Content>
			</Layout>
			<SiteFooter />
		</Layout>
	);
};

export default App;
