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
      case "Room":
        return (
          <div>
            Price: {details.price} PLN per day
            <br />
            Name: {details.flat.name}
            <br />
            Number of guests: {details.maxGuests}
            <br />
            Country: {details.flat.address.country}
            <br />
            City: {details.flat.address.city}
            <br />
            Street name: {details.flat.address.streetName}
            <br />
            Post code: {details.flat.address.postCode}
            <br />
          </div>
        );
      default:
        return <div>unexpected booking type</div>;
    }
  };

  return (
    <Card variant="info" className="DetailsDisplay">
      <Card.Body>
        <Card.Title>Details for booking {props.data.id}</Card.Title>
        <div>
          Booking type: {props.data.itemType}
          <br />
          Date Begun: {new Date(props.data.item.startDateTime).toDateString()}
          <br />
          Date Ended: {new Date(props.data.item.endDateTime).toDateString()}
          <br />
          {DisplayDetails()}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DetailsDisplay;
