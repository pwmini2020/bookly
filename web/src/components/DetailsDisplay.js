import "../styles/DetailsDisplay.css";

import Card from "react-bootstrap/Card";

const DetailsDisplay = (props) => {
  const DisplayDetails = () => {
    const details = props.data.item.details;
    if (details == null) {
      return "invalid details";
    }
    switch (props.data.itemType) {
      case "Car":
        return (
          <div>
            Model: {details.carModel}
            <br />
            Car Id: {details.carId}
            <br />
            Plate number: {details.carPlateNumber}
            <br />
            Description: {details.carDescription}
            <br />
          </div>
        );
      case "Parking":
        return (
          <div>
            Parking name: {details.parkingName}
            <br />
            Parking id: {details.parkingId}
            <br />
          </div>
        );
      /*case "Flat":
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
        );*/
      default:
        return <div>unexpected booking type</div>;
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
