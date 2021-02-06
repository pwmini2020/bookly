import BookingsFilterPanel from "../components/BookingsFilterPanel";
import BookingsList from "../components/BookingsList";

const SummaryPage = (props) => {
  return (
    <div>
      <BookingsList />
      <BookingsFilterPanel />
    </div>
  );
};

export default SummaryPage;
