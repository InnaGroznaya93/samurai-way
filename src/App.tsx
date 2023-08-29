import React, { FC, Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { AppStateType, store } from "./redux/redux-store";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeAppTC } from "../src/redux/app-reducer";
import Preloader from "../src/components/common/Preloader/Preloader";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

type MapDispatchToPropsType = {
  initializeAppTC: any;
};
type MapStateToProps = {
  initialized: boolean;
};
type AppPropsType = MapDispatchToPropsType & MapStateToProps;

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC();
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
          <Suspense fallback={<div><Preloader/></div>}>
          <Switch>
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
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
