import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Search,
} from "lucide-react";

const MyEvents = () => {
  const myEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "2024-03-15",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      type: "Academic Conference",
      participants: 2,
      status: "upcoming",
      image: "https://picsum.photos/800/400?random=2",
    },
    {
      id: 2,
      title: "Sports Tournament - Basketball",
      date: "2024-03-20",
      time: "02:00 PM - 06:00 PM",
      location: "Sports Complex",
      type: "Sports Tournament",
      participants: 5,
      status: "upcoming",
      image: "https://picsum.photos/800/400?random=2",
    },
    {
      id: 3,
      title: "Cultural Festival 2024",
      date: "2024-02-28",
      time: "10:00 AM - 08:00 PM",
      location: "College Ground",
      type: "Cultural Festival",
      participants: 3,
      status: "completed",
      image: "https://picsum.photos/800/400?random=2",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-primary-100 text-primary-800";
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Events</h1>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative flex-1 w-full sm:max-w-xs">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900">
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 h-[20rem] flex flex-col items-start justify-between">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <span
                    className={`px-3 py-1 mx-4 rounded-full text-sm font-medium capitalize ${getStatusColor(
                      event.status
                    )}`}
                  >
                    {event.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>
                      {event.participants}{" "}
                      {event.participants === 1
                        ? "Participant"
                        : "Participants"}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-900">
                  <a
                    className="w-full h-full flex items-center justify-center"
                    href={`/event/${event.id}`}
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {myEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No events found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by registering for an event.
            </p>
            <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-900">
              Browse Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEvents;
