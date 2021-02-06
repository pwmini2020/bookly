import "../styles/DetailsDisplay.css";

const DetailsDisplay = (props) => {
  const DisplayDetails = () => {
    if (props.data.bookingType === "Car") {
      return (
        <div>
          <text>Price: {props.data.Details.dailyPrice} PLN per day</text>
          <br />
          <text>Model: {props.data.Details.model}</text>
          <br />
          <text>Location: {props.data.Details.location}</text>
          <br />
          <text>Plate number: {props.data.Details.plateNumber}</text>
          <br />
          <text>Description: {props.data.Details.description}</text>
          <br />
        </div>
      );
    }
    if (props.data.bookingType === "Parking") {
      return (
        <div>
          <text>Price: {props.data.Details.dailyPrice} PLN per day</text>
          <br />
          <text>Location: {props.data.Details.location}</text>
          <br />
          <text>Space number: {props.data.Details.SpaceNo}</text>
          <br />
          <text>Description: {props.data.Details.description}</text>
          <br />
        </div>
      );
    }
    if (props.data.bookingType === "Flat") {
      return (
        <div>
          <text>Price: {props.data.Details.dailyPrice} PLN per day</text>
          <br />
          <text>Location: {props.data.Details.location}</text>
          <br />
          <text>Number of rooms: {props.data.Details.Number_of_rooms}</text>
          <br />
          <text>Description: {props.data.Details.description}</text>
          <br />
        </div>
      );
    }
  };

  return (
    <div className="DetailsDisplay">
      <div style={{ background: "lightgray", textAlign: "center" }}>
        <text>Details for booking {props.data.id}</text>
      </div>
      <text>Booking type: {props.data.bookingType}</text>
      <br />
      <text>Date Begun: {props.data.startDate}</text>
      <br />
      <text>Date Ended: {props.data.endDate}</text>
      <br />
      {DisplayDetails()}
    </div>
  );
};

export default DetailsDisplay;
