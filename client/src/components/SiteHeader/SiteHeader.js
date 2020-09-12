import React from "react";
import {
	Header,
	HeaderName,
	HeaderNavigation,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
} from "carbon-components-react/lib/components/UIShell";

import Search20 from "@carbon/icons-react/lib/search/20";
import Bookmark20 from "@carbon/icons-react/lib/bookmark/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";

import { Link } from "react-router-dom";

const SiteHeader = () => (
	<Header aria-label="Google Books">
		<SkipToContent />
		<HeaderName element={Link} to="/" prefix="">
			Google Books
		</HeaderName>
		<HeaderNavigation aria-label="Saved Books">
			<HeaderMenuItem element={Link} to="/">
				Search
			</HeaderMenuItem>
			<HeaderMenuItem element={Link} to="/saved">
				Saved
			</HeaderMenuItem>
		</HeaderNavigation>
		<HeaderGlobalBar>
			<HeaderGlobalAction aria-label="Search">
				<Search20 />
			</HeaderGlobalAction>
			<HeaderGlobalAction aria-label="User Avatar">
				<Bookmark20 />
			</HeaderGlobalAction>
			<HeaderGlobalAction aria-label="App Switcher">
				<AppSwitcher20 />
			</HeaderGlobalAction>
		</HeaderGlobalBar>
	</Header>
);
export default SiteHeader;
