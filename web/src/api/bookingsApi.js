const API_URL = process.env.REACT_APP_API_URL;

const getSortType = (sortBy) => {
  switch (sortBy) {
    case "username":
      return "owner.login";
    case "type":
      return "itemType";
    default:
      return "";
  }
};

const getSortOrder = (orderOfSorting) => {
  switch (orderOfSorting) {
    case "ascending":
      return "ASC";
    case "descending":
      return "DESC";
    default:
      return "";
  }
};

const concatBookingType = (dstString, typeName, oracle) => {
  let result;

  if (oracle) {
    if (dstString === "") {
      result = typeName;
    } else {
      result = dstString + "," + typeName;
    }
  } else {
    result = dstString;
  }

  return result;
};

const getBookingType = (filterSettings) => {
  let result = "";

  result = concatBookingType(result, "Car", filterSettings.carBookingsSelected);
  result = concatBookingType(
    result,
    "Room",
    filterSettings.flatBookingsSelected
  );
  result = concatBookingType(
    result,
    "Parking",
    filterSettings.parkingBookingsSelected
  );

  return result;
};

const getBookingsStatus = (filterSettings) => {
  if (
    filterSettings.showActiveSelected &&
    filterSettings.showInactiveSelected
  ) {
    return "";
  } else if (filterSettings.showActiveSelected) {
    return "active";
  } else if (filterSettings.showInactiveSelected) {
    return "inactive";
  } else {
    return "";
  }
};

const getRequestParams = (paginationSettings, filterSettings) => {
  return {
    page: paginationSettings.page,
    sortType: getSortType(filterSettings.sortBy),
    sortOrder: getSortOrder(filterSettings.orderOfSorting),
    bookingType: getBookingType(filterSettings),
    owner: filterSettings.username,
    bookingsStatus: getBookingsStatus(filterSettings),
  };
};

export const getFilteredBookings = (
  token,
  paginationSettings,
  filterSettings
) => {
  // filters are initially empty
  let paramsString;
  if (Object.keys(filterSettings).length === 0) {
    paramsString = `page=${paginationSettings.page}`;
  } else {
    const p = getRequestParams(paginationSettings, filterSettings);
    paramsString = `page=${p.page}&sort=${p.sortType}&sortOrder=${p.sortOrder}&type=${p.bookingType}&owner=${p.owner}&status=${p.bookingsStatus}`;
  }

  return fetch(`${API_URL}/v1/bookings?${paramsString}`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`request failed (${res.status})`);
      }
      return res;
    })
    .then((res) => res.json());
};
