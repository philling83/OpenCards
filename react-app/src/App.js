import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import StudentLoginForm from "./components/auth/StudentLoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Widgets from "./components/Widgets";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import NotFoundPage from "./components/NotFoundPage";



import Test from './components/test'

import FullPageDiv from './components/FullPageDiv';
import Banner from './components/Banner';
import SideBar from './components/SideBar';
import Library from './components/Library';
import CreateClass from './components/CreateClass';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	//   useEffect(() => {
	//     (async() => {
	//       setLoaded(true);
	//     })();
	//   }, []);

	//   if (!loaded) {
	//     return null;
	//   }

	return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Switch>
				<Route exact path="/">
					<NavBar setAuthenticated={setAuthenticated} />
					<Widgets />
					<Footer />
				</Route>
				<Route path="/test" exact={true}>
					<Test />
				</Route>
				<Route path="/login" exact={true}>
					<LoginForm
					// authenticated={authenticated}
					// setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/login/student" exact={true}>
					<StudentLoginForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<ProtectedRoute path="/app" exact={true}>
					<h1>My Home Page</h1>
				</ProtectedRoute>
				<Route path="/404">
					<NotFoundPage />
				</Route>

        <Route path='/teachers/:teacherId'>
          <FullPageDiv />
        </Route>
        <Route path='/teacher/createClass'>
        <div class='fullPageDiv'>
                  <Banner />
                  <div class='bodyDiv'>
                      <SideBar />
                      <div class='mainDiv'>
                            <CreateClass />
                      </div>
                  </div>
          </div>
        </Route>
        <Route path='/teachers/libraries'>
          <div class='fullPageDiv'>
                  <Banner />
                  <div class='bodyDiv'>
                      <SideBar />
                      <div class='mainDiv'>
                            <Library />
                      </div>
                  </div>
          </div>
        </Route>
        {/* <Route path='/teachers/:teacherId/cards'>
          <div class='fullPageDiv'>
                  <Banner />
                  <div class='bodyDiv'>
                      <SideBar />
                      <div class='mainDiv'>
                            < />
                      </div>
                  </div>
          </div>
        </Route> */}

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
