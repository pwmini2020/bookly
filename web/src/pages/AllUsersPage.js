import UserData from "../mockData/users.json";
import UserListItem from "../components/UserListItem";
import NavButtons from "../components/NavButtons";

const AllUsersPage = (props) => {
  const fetchNextPage = () => {
    console.log("Next button pressed");
  };

  const fetchPreviousPage = () => {
    console.log("Previous button pressed.");
  };

  return (
    <div>
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
          previousPage={() => fetchPreviousPage()}
          nextPage={() => fetchNextPage()}
        />
      </div>
    </div>
  );
};

export default AllUsersPage;
