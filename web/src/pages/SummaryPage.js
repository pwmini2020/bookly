import BookingsFilterPanel from "../components/BookingsFilterPanel";
import BookingsList from "../components/BookingsList";

const SummaryPage = (props) => {
  return (
    <div>
      <h1>summary page</h1>
      <BookingsList />
      <BookingsFilterPanel />
    </div>
  );
};

export default SummaryPage;
