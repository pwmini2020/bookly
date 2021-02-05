import "../styles/NavButtons.css"


const NavButtons = (props) => {
    return(
        <div className="NavButtons">
            <div>
                <button className="NavButton" onClick={props.previousPage}>{"<"}</button>
                <button className="NavButton" onClick={props.nextPage}>{">"}</button>
            </div>
            <div>
                Showing {props.pageNumber}/{props.pageTotal}
            </div>
        </div>
    )
}

export default NavButtons;