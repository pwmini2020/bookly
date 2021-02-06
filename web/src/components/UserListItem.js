import "../styles/UserListItem.css";

const UserListItem = (props) => {
  return (
    <tr>
      <td>{props.t1}</td>
      <td>{props.t2}</td>
    </tr>
  );
};

export default UserListItem;
