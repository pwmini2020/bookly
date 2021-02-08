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
  const [phoneNo, setPhoneNo] = useState("");

  const getFormData = () => {
    return {
      email: email,
      login: username,
      password: password,
      firstName: firstname,
      lastName: surname,
      country: country,
      address: address,
      phoneNumber: phoneNo,
    };
  };

  const submitNewUserData = (e, newUserData) => {
    e.preventDefault();
    props.createNewUser(newUserData);
  };

  const displayProgress = () => {
    if (props.requestInProgress) {
      return (
        <div>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (props.requestFailed) {
      return (
        <div class="alert alert-danger" role="alert">
          Request failed.
        </div>
      );
    } else if (!props.requestFailed && props.requestWasSent) {
      return (
        <div className="alert alert-success" role="alert">
          Success.
        </div>
      );
    }
  };

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <form onSubmit={(e) => submitNewUserData(e, getFormData())}>
        <div className="form-gorup row my-1">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            First name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="John"
              name="name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="surname" className="col-sm-2 col-form-label">
            Surname:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Smith"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="country" className="col-sm-2 col-form-label">
            Country:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Poland"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="form-gorup row my-1">
          <label htmlFor="phoneNo" className="col-sm-2 col-form-label">
            Phone number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="123456789"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
        </div>

        <input
          className="btn btn-primary my-1"
          type="submit"
          value="Create a new user"
        />
      </form>
      <br />

      {displayProgress()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
