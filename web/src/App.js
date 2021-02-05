import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import AppRouter from "./components/AppRouter";

import bookingsReducer from "./reducers/bookingsReducer";
import userAuthReducer from "./reducers/userAuthReducer";
import usersReducer from "./reducers/usersReducer";
import loginPageReducer from "./reducers/loginPageReducer";
import newUserReducer from "./reducers/newUserReducer";

const rootReducer = combineReducers({
  bookings: bookingsReducer,
  userAuth: userAuthReducer,
  users: usersReducer,
  loginPage: loginPageReducer,
  newUser: newUserReducer,
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
