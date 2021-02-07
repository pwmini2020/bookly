import { useState } from "react";
import { connect } from "react-redux";

import { createNewUser } from "../actionCreators/newUserActionCreator";

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (newUserData) => dispatch(createNewUser(newUserData)),
});

const mapStateToProps = (state) => ({
  requestFailed: state.newUser.requestFailed,
  requestInProgress: state.newUser.requestInProgress,
  requestWasSent: state.newUser.requestWasSent,
});

const AddUserPage = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const getFormData = () => {
    return {
      email: email,
      login: username,
      password: password,
      firstName: firstname,
      lastName: surname,
      country: country,
      address: address,
    };
  };

  const submitNewUserData = (e, newUserData) => {
    e.preventDefault();
    props.createNewUser(newUserData);
  };

  const displayProgress = () => {
    if (props.requestInProgress) {
      return <p>request in progress...</p>;
    } else if (props.requestFailed) {
      return <p>request failed</p>;
    } else if (!props.requestFailed && props.requestWasSent) {
      return <p>success</p>;
    }
  };

  return (
    <div style={{ margin: "10px" }}>
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
      {displayProgress()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
