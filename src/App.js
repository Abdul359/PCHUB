import Navbar from "./components/layouts/navbar/Navbar";
// import Slider from "./components/pages/landing/Slider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import HowToBuild from "./components/pages/howToBuild/HowToBuild";
import BuildPc from "./components/pages/buildPc/BuildPc";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import UserPortal from "./components/utils/UserPortal";
import { useEffect, useRef } from "react";
import { auth } from "./firebase";
import useUserContext from "./components/context/user/useUserContext";
import useUtilsContext from "./components/context/utilsContext/useUtilsContext";
import Loading from "./components/utils/Loading";
import ErrorPage from "./components/pages/404/ErrorPage";
import Error from "./components/utils/Error";
import useData from "./components/context/data/useData";
import Landing from "./components/pages/landing/Landing";
import Showmore from "./components/pages/showmore/Showmore";
import {
	GET_CODING_DATA,
	GET_FEATURED_DATA,
	GET_EDITING_DATA,
	GET_GAMING_DATA,
} from "./components/context/types";
import ShowBuild from "./components/pages/showBuild/ShowBuild";
import Ownpc from "./components/pages/ownPc/OwnPc";

function App() {
	const { loading, error, setLoading, clearLoading } = useUtilsContext();
	const { authStateChange } = useUserContext();
	const { getData } = useData();
	let unSubscribeFromAuth = useRef();

	useEffect(() => {
		const authenticate = () => {
			unSubscribeFromAuth.current = auth.onAuthStateChanged(
				(snapshot) => {
					authStateChange(snapshot);
				}
			);
		};
		setLoading("please wait...");
		authenticate();
		getData("featured", GET_FEATURED_DATA);
		getData("coding", GET_CODING_DATA);
		getData("editing", GET_EDITING_DATA);
		getData("gaming", GET_GAMING_DATA);
		clearLoading();
		return () => {
			unSubscribeFromAuth.current();
		};
		//eslint-disable-next-line
	}, [setLoading, clearLoading]);
	return (
		<>
			<Router>
				<Navbar />
				{error && <Error />}
				{loading ? (
					<Loading />
				) : (
					<>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/aboutus" component={AboutUs} />
							<Route
								exact
								path="/howtobuild"
								component={HowToBuild}
							/>
							<Route exact path="/buildpc">
								<Ownpc />
							</Route>
							<Route exact path="/allpcbuildproperties">
								<BuildPc />
							</Route>
							<Route
								exact
								path="/contactus"
								component={ContactUs}
							/>
							<Route
								exact
								path="/profile"
								component={UserPortal}
							/>
							<Route
								exact
								path="/profile/:id/build"
								component={ShowBuild}
							/>
							<Route exact path="/featured/:id">
								<Showmore featured />
							</Route>
							<Route exact path="/coding/:id">
								<Showmore coding />
							</Route>
							<Route exact path="/gaming/:id">
								<Showmore gaming />
							</Route>
							<Route exact path="/editing/:id">
								<Showmore editing />
							</Route>
							<Route
								exact
								path="/buildpc/:uid/:name"
								render={(props) => (
									<BuildPc {...props} scrollIntoViewElement />
								)}
							/>
							<Route component={ErrorPage} />
						</Switch>
					</>
				)}
			</Router>
		</>
	);
}

export default App;
