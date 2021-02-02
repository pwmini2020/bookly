import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import bookingsReducer from "./reducers/bookingsReducer";
import loggedUserReducer from "./reducers/loggedUserReducer";
import newUserFormReducer from "./reducers/newUserFormReducer";
import usersReducer from "./reducers/usersReducer";

import LoginPage from "./pages/LoginPage";

const rootReducer = combineReducers({
  bookings: bookingsReducer,
  loggedUser: loggedUserReducer,
  newUserForm: newUserFormReducer,
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}

export default App;
