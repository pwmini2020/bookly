import "../styles/DetailsDisplay.css";

const DetailsDisplay = (props) => {
  const DisplayDetails = () => {
    if (props.data.bookingType === "Car") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <br />
          <p>Model: {props.data.Details.model}</p>
          <br />
          <p>Location: {props.data.Details.location}</p>
          <br />
          <p>Plate number: {props.data.Details.plateNumber}</p>
          <br />
          <p>Description: {props.data.Details.description}</p>
          <br />
        </div>
      );
    }
    if (props.data.bookingType === "Parking") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <br />
          <p>Location: {props.data.Details.location}</p>
          <br />
          <p>Space number: {props.data.Details.SpaceNo}</p>
          <br />
          <p>Description: {props.data.Details.description}</p>
          <br />
        </div>
      );
    }
    if (props.data.bookingType === "Flat") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <br />
          <p>Location: {props.data.Details.location}</p>
          <br />
          <p>Number of rooms: {props.data.Details.Number_of_rooms}</p>
          <br />
          <p>Description: {props.data.Details.description}</p>
          <br />
        </div>
      );
    }
  };

  return (
    <div className="DetailsDisplay">
      <div style={{ background: "lightgray", textAlign: "center" }}>
        <p>Details for booking {props.data.id}</p>
      </div>
      <p>Booking type: {props.data.bookingType}</p>
      <br />
      <p>Date Begun: {props.data.startDate}</p>
      <br />
      <p>Date Ended: {props.data.endDate}</p>
      <br />
      {DisplayDetails()}
    </div>
  );
};

export default DetailsDisplay;
