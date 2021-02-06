import "../styles/BookingsListItem";

const BookingsListItem = (props) => {
  const displayDetailsSummaryColumn = () => {
    switch (props.data.bookingType) {
      case "Car":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">{props.data.Details.model}</div>
            <div className="detailsRow">{props.data.Details.plateNumber}</div>

            <div className="detailsRow">
              <button>More...</button>
            </div>
          </div>
        );

      case "Flat":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">
              {props.data.Details.Number_of_rooms} bedrooms
            </div>
            <div className="detailsRow">{props.data.Details.location}</div>

            <div className="detailsRow">
              <button>More...</button>
            </div>
          </div>
        );

      case "Parking":
        return (
          <div className="detailsColumn">
            <div className="detailsRow">{props.data.Details.location}</div>
            <div className="detailsRow">{props.data.Details.SpaceNo}</div>

            <div className="detailsRow">
              <button>More...</button>
            </div>
          </div>
        );

      default:
        return <div className="detailsColumn">unexpected booking type</div>;
    }
  };

  return (
    <div>
      <div className="usernameColumn">{props.data.Username}</div>
      <div className="bookingTypeColumn">{props.data.bookingType}</div>
      <div className="bookingIdColumn">{props.data.id}</div>
      <div className="bookingDetailsColumn">
        <div className="dateColumn">
          <div className="dateRow">{props.data.startDate}</div>
          <div className="dateRow">{props.data.endDate}</div>
        </div>
        {displayDetailsSummaryColumn()}
        <div className="buttonsColumn">
          <div className="buttonsRow">
            <button>Modify</button>
          </div>
          <div className="buttonsRow">
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsListItem;
