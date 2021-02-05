import { useState } from "react";
import { connect } from "react-redux";

import { createNewUser } from "../actionCreators/newUserActionCreator";

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (newUserData) => dispatch(createNewUser(newUserData)),
});

const mapStateToProps = (state) => ({
  requestFailed: state.newUser.requestFailed,
  requestInProgress: state.newUser.requestInProgress,
});

const AddUserPage = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const getFormData = () => {
    return {
      email: email,
      username: username,
      firstname: firstname,
      surname: surname,
      country: country,
      address: address,
    };
  };

  const submitNewUserData = (e, newUserData) => {
    e.preventDefault();
    props.createNewUser(newUserData);
  };

  return (
    <div>
      <h1>add user page</h1>

      <form onSubmit={(e) => submitNewUserData(e, getFormData())}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />

        <label htmlFor="surname">Surname: </label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />

        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />

        <input
          type="submit"
          value="Generate a password and create a new user"
        />
      </form>
      {props.requestInProgress && <p>request in progress...</p>}
      {props.requestFailed && <p>request failed</p>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
