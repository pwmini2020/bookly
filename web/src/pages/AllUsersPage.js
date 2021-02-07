import UserData from "../mockData/users.json";
import UserListItem from "../components/UserListItem";
import NavButtons from "../components/NavButtons";

import Table from "react-bootstrap/Table";

const AllUsersPage = (props) => {
  const fetchNextPage = () => {
    console.log("Next button pressed");
  };

  const fetchPreviousPage = () => {
    console.log("Previous button pressed.");
  };

  return (
    <div style={{ margin: "10px" }}>
      <div className="UserList">
        <Table striped bordered variant="secondary">
          <thead>
            <tr>
              <th width="40%">Username</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((user) => (
              <UserListItem
                key={user.id}
                t1={user.username}
                t2={new Date(user.lastActive).toDateString()}
              />
            ))}
          </tbody>
        </Table>
        <NavButtons
          pageNumber={1}
          pageTotal={10}
          previousPage={() => fetchPreviousPage()}
          nextPage={() => fetchNextPage()}
        />
      </div>
    </div>
  );
};

export default AllUsersPage;
