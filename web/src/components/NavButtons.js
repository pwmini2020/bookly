import "../styles/NavButtons.css";

const NavButtons = (props) => {
  return (
    <div className="NavButtons">
      <div>
        <button className="btn btn-primary m-1" onClick={props.previousPage}>
          {"<"}
        </button>
        <button className="btn btn-primary m-1" onClick={props.nextPage}>
          {">"}
        </button>
      </div>
      <div>
        Showing {props.pageNumber}/{props.pageTotal}
      </div>
    </div>
  );
};

export default NavButtons;
