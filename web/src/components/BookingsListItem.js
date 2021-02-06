import "../styles/BookingsListItem.css";

const BookingsListItem = (props) => {
  const seeMoreDetails = () => {
    console.log("more details clicked");
  };

  const modifyBooking = () => {
    console.log("modify clicked");
  };

  const deleteBooking = () => {
    console.log("delete clicked");
  };

  const displayDetailsSummaryColumn = () => {
    switch (props.data.bookingType) {
      case "Car":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">Model: {props.data.Details.model}</div>
            <div className="detailsRow">
              Plate numbers: {props.data.Details.plateNumber}
            </div>

            <div className="detailsRow">
              <button onClick={() => seeMoreDetails()}>More...</button>
            </div>
          </div>
        );

      case "Flat":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">
              Bedrooms: {props.data.Details.Number_of_rooms}
            </div>
            <div className="detailsRow">
              Location: {props.data.Details.location}
            </div>

            <div className="detailsRow">
              <button onClick={() => seeMoreDetails()}>More...</button>
            </div>
          </div>
        );

      case "Parking":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">
              Parking spot number: {props.data.Details.SpaceNo}
            </div>
            <div className="detailsRow">
              Location: {props.data.Details.location}
            </div>

            <div className="detailsRow">
              <button onClick={() => seeMoreDetails()}>More...</button>
            </div>
          </div>
        );

      default:
        return <div className="detailsColumn">unexpected booking type</div>;
    }
  };

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
        {displayDetailsSummaryColumn()}
        <div className="buttonsColumn">
          <div className="buttonsRow">
            <button onClick={() => modifyBooking()}>Modify</button>
          </div>
          <div className="buttonsRow">
            <button onClick={() => deleteBooking()}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsListItem;
