import UserData from "../mockData/users.json";
import UserListItem from "../components/UserListItem";
import NavButtons from "../components/NavButtons";

const AllUsersPage = (props) => {
  return (
    <div>
      <h1>all users page</h1>
      <div className="UserList">
        <div
          className="UserListItem"
          style={{ background: "lightgray", height: "30px" }}
        >
          <div className="UserListItemColumn" style={{ flex: 0.4 }}>
            <p style={{ fontWeight: "bold" }}>Username</p>
          </div>
          <div className="UserListItemColumn" style={{ flex: 0.6 }}>
            <p style={{ fontWeight: "bold" }}>Last Active</p>
          </div>
        </div>
        {UserData.map((user) => (
          <UserListItem
            key={user.id}
            t1={user.username}
            t2={new Date(user.lastActive).toDateString()}
          />
        ))}
        <NavButtons
          pageNumber={1}
          pageTotal={10}
          nextPage={() => {
            console.log("Next button pressed");
          }}
        />
      </div>
    </div>
  );
};

export default AllUsersPage;

//
