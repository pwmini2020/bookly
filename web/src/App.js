import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import bookingsReducer from "./reducers/bookingsReducer";
import loggedUserReducer from "./reducers/loggedUserReducer";
import newUserFormReducer from "./reducers/newUserFormReducer";
import usersReducer from "./reducers/usersReducer";

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
      <h1>Hello Bookly!</h1>
    </Provider>
  );
}

export default App;
