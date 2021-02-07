import "../styles/BookingsListItem.css";
import DetailsDisplay from "./DetailsDisplay";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";

const BookingsListItem = (props) => {
  const displayTypeSpecificRows = () => {
    const details = props.data.item.details;
    if (details == null) {
      return "Invalid details";
    }
    switch (props.data.itemType) {
      case "Car":
        return (
          <div>
            <div className="detailsRow">Model: {details.carModel}</div>
            <div className="detailsRow">
              Plate numbers: {details.carPlateNumber}
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
              Parking spot number: {props.data.Details.parkingName}
            </div>
            <div className="detailsRow">
              Location: {props.data.Details.parkingId}
            </div>
          </div>
        );

      default:
        return <div>unexpected booking type</div>;
    }
  };

  return (
    <tr>
      <td>{props.data.owner.login}</td>
      <td>{props.data.itemType}</td>
      <td>{props.data.id}</td>
      <td>
        Start date: {new Date(props.data.item.startDateTime).toDateString()}
        <br />
        End date: {new Date(props.data.item.endDateTime).toDateString()}
      </td>
      <td>
        {displayTypeSpecificRows()}
        <div className="detailsRow">
          <Popup
            trigger={
              <Button
                variant="info"
                size="sm"
                disabled={props.data.item.details == null}
              >
                More...
              </Button>
            }
            position="left top"
            closeOnDocumentClick
            closeOnEscape
            repositionOnResize
          >
            <DetailsDisplay data={props.data} />
          </Popup>
        </div>
      </td>
    </tr>
  );
};

export default BookingsListItem;
