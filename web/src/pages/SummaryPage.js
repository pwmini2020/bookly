import BookingsFilterPanel from "../components/BookingsFilterPanel";

import MockBookings from "../mockData/AllBookings.json";
import DetailsDisplay from "../components/DetailsDisplay";

const SummaryPage = (props) => {
  return (
    <div>
      <h1>summary page</h1>
      <DetailsDisplay data={MockBookings[2]} />
      <BookingsFilterPanel />
    </div>
  );
};

export default SummaryPage;
