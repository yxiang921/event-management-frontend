import PropTypes from "prop-types";

const UpcomingEventCard = ({ event }) => {

  const monthNumberToText = (number) => {
    const months = {
      1: "JAN",
      2: "FEB",
      3: "MAR",
      4: "APR",
      5: "MAY",
      6: "JUN",
      7: "JUL",
      8: "AUG",
      9: "SEP",
      10: "OCT",
      11: "NOV",
      12: "DEC",
    };

    return months[number - 1];
  }

  return (
    <a href={`/event/${event._id}`}>
      <div className="my-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 duration-300 max-w-sm cursor-pointer">
        <div className="relative">
          <img
            src={event.image}
            alt="Event Image"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />

          <div className="w-24 flex items-center justify-center absolute top-4 left-4 bg-white text-gray-900 text-md font-bold px-2 py-1 rounded-lg shadow">
            {event.maxCapacity} Seats
          </div>
        </div>

        <div className="flex flex-row justify-start items-center">
          <div className="py-6 flex flex-col items-center justify-center w-1/4 h-full">
            <div className="text-2xl font-bold text-gray-800">
              {event.date.split("T")[0].split("-")[2]}
            </div>
            <div className="text-gray-800 font-semibold text-sm">
              {monthNumberToText(Number(event.date.split("T")[0].split("-")[1]))}
            </div>
          </div>

          <div className="py-6 w-full h-full">
            <h3 className="text-lg font-semibold text-gray-800">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm h-12">{event.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

UpcomingEventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpcomingEventCard;
