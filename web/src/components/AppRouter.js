import LoginPage from "../pages/LoginPage";
import SummaryPage from "../pages/SummaryPage";
import AddUserPage from "../pages/AddUserPage";
import AllUsersPage from "../pages/AllUsersPage";
import NotFoundPage from "../pages/NotFoundPage";

import Header from "./Header";

import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const mapStateToProps = (state) => ({
  userIsLoggedIn: state.userAuth.isLoggedIn,
});

const AppRouter = (props) => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/login" component={LoginPage} />
        {!props.userIsLoggedIn && (
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        )}

        <Route exact path="/">
          <Redirect to="/summary" />
        </Route>
        <Route path="/summary" component={SummaryPage} />
        <Route path="/addUser" component={AddUserPage} />
        <Route path="/allUsers" component={AllUsersPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default connect(mapStateToProps, () => ({}))(AppRouter);
