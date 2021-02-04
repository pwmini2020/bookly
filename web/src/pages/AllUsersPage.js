import Navbar from "../components/Navbar";
import UserData from "../PlaceholderData/AllUsers.json"
import UserListItem from "../components/UserListItem"
import NavButtons from "../components/NavButtons"

const AllUsersPage = (props) => {
  return (
    <div>
      <Navbar />
      <h1>all users page</h1>
      <div className="UserList">
        <div className="UserListItem" style={{background: "lightgray", height: "30px"}}>
            <div className="UserListItemColumn" style={{flex: 0.4}}>
                <text style={{fontWeight: "bold"}}>Username</text>
            </div>
            <div className="UserListItemColumn" style={{flex: 0.6}}>
                <text style={{fontWeight: "bold"}}>Last Active</text>
            </div>
        </div>
        {UserData.map((user) => <UserListItem t1 = {user.username} t2={new Date(user.lastActive).toDateString()}/>)}
        <NavButtons pageNumber={1} pageTotal={10} nextPage={() => {console.log("Next button pressed")}} />
      </div>
    </div>
  );
};

export default AllUsersPage;

//