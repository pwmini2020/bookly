import "../styles/DetailsDisplay.css";

const DetailsDisplay = (props) => {
  const DisplayDetails = () => {
    if (props.data.bookingType === "Car") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <p>Model: {props.data.Details.model}</p>
          <p>Location: {props.data.Details.location}</p>
          <p>Plate number: {props.data.Details.plateNumber}</p>
          <p>Description: {props.data.Details.description}</p>
        </div>
      );
    }
    if (props.data.bookingType === "Parking") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <p>Location: {props.data.Details.location}</p>
          <p>Space number: {props.data.Details.SpaceNo}</p>
          <p>Description: {props.data.Details.description}</p>
        </div>
      );
    }
    if (props.data.bookingType === "Flat") {
      return (
        <div>
          <p>Price: {props.data.Details.dailyPrice} PLN per day</p>
          <p>Location: {props.data.Details.location}</p>
          <p>Number of rooms: {props.data.Details.Number_of_rooms}</p>
          <p>Description: {props.data.Details.description}</p>
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
      <p>Date Begun: {props.data.startDate}</p>
      <p>Date Ended: {props.data.endDate}</p>
      {DisplayDetails()}
    </div>
  );
};

export default DetailsDisplay;
