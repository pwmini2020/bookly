import "../styles/BookingsListItem.css";
import DetailsDisplay from "./DetailsDisplay";

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
  //<button onClick={() => seeMoreDetails()}>More...</button>
  return (
    <div className="bookingsListRow">
      <div className="usernameColumn">{props.data.Username}</div>
      <div className="bookingTypeColumn">{props.data.bookingType}</div>
      <div className="bookingIdColumn">{props.data.id}</div>
      <div className="bookingDetailsColumn">
        <div className="dateColumn">
          <div className="dateRow">Start date: {props.data.startDate}</div>
          <div className="dateRow">End date: {props.data.endDate}</div>
        </div>
        <div className="detailsColumn">
          {displayTypeSpecificRows()}
          <div className="detailsRow">
            <Popup
              trigger={<button>More...</button>}
              position="left center"
              closeOnDocumentClick
              closeOnEscape
              repositionOnResize
            >
              <DetailsDisplay data={props.data} />
            </Popup>
          </div>
        </div>
        <div className="buttonsColumn">
          <button onClick={() => deleteBooking()}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BookingsListItem;
