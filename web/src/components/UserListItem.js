import "../styles/UserListItem.css";

const UserListItem = (props) => {
  return (
    <div className="UserListItem">
      <div className="UserListItemColumn" style={{ flex: 0.4 }}>
        <p>{props.t1}</p>
      </div>
      <div className="UserListItemColumn" style={{ flex: 0.6 }}>
        <p>{props.t2}</p>
      </div>
    </div>
  );
};

export default UserListItem;
