import "../styles/BookingsListItem.css";
import DetailsDisplay from "./DetailsDisplay";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";

const BookingsListItem = (props) => {
  const deleteBooking = () => {
    console.log("delete clicked");
  };

  const displayTypeSpecificRows = () => {
    switch (props.data.bookingType) {
      case "Car":
        return (
          <div>
            <div className="detailsRow">Model: {props.data.Details.model}</div>
            <div className="detailsRow">
              Plate numbers: {props.data.Details.plateNumber}
            </div>
          </div>
        );

      case "Flat":
        return (
          <div>
            <div className="detailsRow">
              Bedrooms: {props.data.Details.Number_of_rooms}
            </div>
            <div className="detailsRow">
              Location: {props.data.Details.location}
            </div>
          </div>
        );

      case "Parking":
        return (
          <div>
            <div className="detailsRow">
              Parking spot number: {props.data.Details.SpaceNo}
            </div>
            <div className="detailsRow">
              Location: {props.data.Details.location}
            </div>
          </div>
        );

      default:
        return <div>unexpected booking type</div>;
    }
  };

  return (
    <tr>
      <td>{props.data.Username}</td>
      <td>{props.data.bookingType}</td>
      <td>{props.data.id}</td>
      <td>
        Start date: {new Date(props.data.startDate).toDateString()}
        <br />
        End date: {new Date(props.data.endDate).toDateString()}
      </td>
      <td>
        {displayTypeSpecificRows()}
        <div className="detailsRow">
          <Popup
            trigger={
              <Button variant="info" size="sm">
                More...
              </Button>
            }
            position="left center"
            closeOnDocumentClick
            closeOnEscape
            repositionOnResize
          >
            <DetailsDisplay data={props.data} />
          </Popup>
        </div>
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteBooking()}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default BookingsListItem;
