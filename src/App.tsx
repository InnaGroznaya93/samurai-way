import React, { FC, Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { AppStateType, store } from "./redux/redux-store";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeAppTC } from "../src/redux/app-reducer";
import Preloader from "../src/components/common/Preloader/Preloader";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(
  () => import("./components/Profile/ProfileContainer")
);

type MapDispatchToPropsType = {
  initializeAppTC: any;
};
type MapStateToProps = {
  initialized: boolean;
};
type AppPropsType = MapDispatchToPropsType & MapStateToProps;

class App extends React.Component<AppPropsType> {

  catchAllUnhandledErrors = (ev: PromiseRejectionEvent) => {
    alert("Some error occured")
    console.error(ev)
  }

  componentDidMount() {
    this.props.initializeAppTC();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={"app-wrapper"}>
        <HeaderContainer />
        <Navbar />

        <div className={"app-wrapper-content"}>
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Switch>
              <Route exact path={"/"} component={() => <Redirect to={"/profile"}/>} />
              <Route path={"/dialogs"} component={() => <DialogsContainer />} />
              <Route
                path={"/profile/:userId?"}
                component={() => <ProfileContainer />}
              />
              <Route path={"/music"} component={() => <Music />} />
              <Route path={"/news"} component={() => <News />} />
              <Route path={"/settings"} component={() => <Settings />} />
              <Route path={"/users"} component={() => <UsersContainer />} />
              <Route path={"/login"} component={() => <Login />} />
              <Route path={"*"} component={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<FC>(
  withRouter,
  connect(mapStateToProps, { initializeAppTC })
)(App);

let SamuraiJSApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJSApp;
