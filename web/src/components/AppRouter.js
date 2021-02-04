import LoginPage from "../pages/LoginPage";
import SummaryPage from "../pages/SummaryPage";
import AddUserPage from "../pages/AddUserPage";
import AllUsersPage from "../pages/AllUsersPage";
import NotFoundPage from "../pages/NotFoundPage";

import Header from "../components/Header";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const AppRouter = (props) => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/summary" component={SummaryPage} />
        <Route path="/addUser" component={AddUserPage} />
        <Route path="/allUsers" component={AllUsersPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
