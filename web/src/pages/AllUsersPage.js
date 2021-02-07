import UserData from "../mockData/users.json";
import UserListItem from "../components/UserListItem";
import NavButtons from "../components/NavButtons";

import Table from "react-bootstrap/Table";

import { useEffect } from "react";
import { connect } from "react-redux";

import {
  nextPageUsers,
  previousPageUsers,
  fetchUsers,
} from "../actionCreators/usersActionCreator";

const mapDispatchToProps = (dispatch) => ({
  nextPage: () => dispatch(nextPageUsers()),
  previousPage: () => dispatch(previousPageUsers()),
  fetchUsers: (token, paginationSettings) =>
    dispatch(fetchUsers(token, paginationSettings)),
});

const mapStateToProps = (state) => ({
  token: state.userAuth.token,
  totalPages: state.users.totalPages,
  page: state.users.page,
  fetchInProgress: state.users.fetchInProgress,
  users: state.users.users,
});

const AllUsersPage = (props) => {
  useEffect(() => {
    props.fetchUsers(props.token, { page: props.page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNextPage = () => {
    if (props.page + 1 < props.totalPages) {
      props.nextPage();
      const paginationSettings = { page: props.page + 1 };
      props.fetchUsers(props.token, paginationSettings);
    }
  };

  const fetchPreviousPage = () => {
    if (props.page - 1 >= 0) {
      props.previousPage();
      const paginationSettings = { page: props.page - 1 };
      props.fetchUsers(props.token, paginationSettings);
    }
  };

  return (
    <div>
      {props.fetchInProgress ? (
        <p>loading...</p>
      ) : (
        <div style={{ margin: "10px" }}>
          <div className="UserList">
            <Table striped bordered variant="secondary">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user) => (
                  <UserListItem
                    key={user.id}
                    login={user.login}
                    firstName={user.firstName}
                    surname={user.lastName}
                  />
                ))}
              </tbody>
            </Table>
            <NavButtons
              pageNumber={props.page + 1}
              pageTotal={props.totalPages}
              previousPage={() => fetchPreviousPage()}
              nextPage={() => fetchNextPage()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
