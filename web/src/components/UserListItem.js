import "../styles/UserListItem.css";



const UserListItem = (props) => {
    return(
        <div className="UserListItem">
            <div className="UserListItemColumn" style={{flex: 0.4}}>
                <text>{props.t1}</text>
            </div>
            <div className="UserListItemColumn" style={{flex: 0.6}}>
                <text>{props.t2}</text>
            </div>
        </div>
    )
    
}

export default UserListItem;