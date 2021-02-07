import "../styles/UserListItem.css";

const UserListItem = (props) => {
  return (
    <tr>
      <td>{props.login}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
    </tr>
  );
};

export default UserListItem;
