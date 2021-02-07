import "../styles/DetailsDisplay.css";

import Card from "react-bootstrap/Card";

const DetailsDisplay = (props) => {
  const DisplayDetails = () => {
    const ParsedDetails = JSON.parse(props.data.item.details);
    if (props.data.itemType === "Car") {
      /*return (
        <div>
          Price: {props.data.Details.dailyPrice} PLN per day
          <br />
          Model: {props.data.Details.model}
          <br />
          Location: {props.data.Details.location}
          <br />
          Plate number: {props.data.Details.plateNumber}
          <br />
          Description: {props.data.Details.description}
          <br />
        </div>
      );*/
      return <div>Car ID: {ParsedDetails.carId}</div>;
    }
    if (props.data.bookingType === "Parking") {
      return (
        <div>
          Price: {props.data.Details.dailyPrice} PLN per day
          <br />
          Location: {props.data.Details.location}
          <br />
          Space number: {props.data.Details.SpaceNo}
          <br />
          Description: {props.data.Details.description}
          <br />
        </div>
      );
    }
    if (props.data.bookingType === "Flat") {
      return (
        <div>
          Price: {props.data.Details.dailyPrice} PLN per day
          <br />
          Location: {props.data.Details.location}
          <br />
          Number of rooms: {props.data.Details.Number_of_rooms}
          <br />
          Description: {props.data.Details.description}
          <br />
        </div>
      );
    }
  };

  return (
    <Card variant="info" className="DetailsDisplay">
      <Card.Body>
        <Card.Title>Details for booking {props.data.id}</Card.Title>
        <Card.Text>
          Booking type: {props.data.itemType}
          <br />
          Date Begun: {new Date(props.data.item.startDateTime).toDateString()}
          <br />
          Date Ended: {new Date(props.data.item.endDateTime).toDateString()}
          <br />
          {DisplayDetails()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DetailsDisplay;
