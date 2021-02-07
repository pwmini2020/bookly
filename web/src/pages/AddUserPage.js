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
        <div class="form-gorup row my-1">
          <label for="email" class="col-sm-1 col-form-label">
            Email:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="email"
              class="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div class="form-gorup row my-1">
          <label for="username" class="col-sm-1 col-form-label">
            Username:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              class="form-control"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div class="form-gorup row my-1">
          <label for="name" class="col-sm-1 col-form-label">
            First name:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              class="form-control"
              name="name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>

        <div class="form-gorup row my-1">
          <label for="surname" class="col-sm-1 col-form-label">
            Surname:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              class="form-control"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>

        <div class="form-gorup row my-1">
          <label for="country" class="col-sm-1 col-form-label">
            Country:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              class="form-control"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div class="form-gorup row my-1">
          <label for="address" class="col-sm-1 col-form-label">
            Address:{" "}
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              class="form-control"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <input
          class="btn btn-primary my-1"
          type="submit"
          value="Generate a password and create a new user"
        />
      </form>
      {displayProgress()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
