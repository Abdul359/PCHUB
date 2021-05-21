import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./components/context/user/UserProvider";
import UtilsProvider from "./components/context/utilsContext/UtilsProvider";
import DataProvider from "./components/context/data/DataProvider";
import BuildProvider from "./components/context/pcBuild/BuildProvider";

ReactDOM.render(
	<DataProvider>
		<UtilsProvider>
			<UserProvider>
				<BuildProvider>
					<App />
				</BuildProvider>
			</UserProvider>
		</UtilsProvider>
	</DataProvider>,
	document.getElementById("root")
);

reportWebVitals();
