import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import AppRouter from "./components/AppRouter";

import bookingsReducer from "./reducers/bookingsReducer";
import loggedUserReducer from "./reducers/loggedUserReducer";
import usersReducer from "./reducers/usersReducer";
import loginPageReducer from "./reducers/loginPageReducer";

const rootReducer = combineReducers({
  bookings: bookingsReducer,
  loggedUser: loggedUserReducer,
  users: usersReducer,
  loginPage: loginPageReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
