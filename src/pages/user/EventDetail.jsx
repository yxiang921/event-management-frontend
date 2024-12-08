import {
  Calendar,
  Clock,
  MapPin,
  User,
  Users,
  Share2,
  Download,
  ChevronRight,
} from "lucide-react";

const EventDetailPage = () => {
  const event = {
    title: "Annual Tech Symposium 2024",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium, Engineering Block",
    organizer: "Computer Science Department",
    description:
      "Join us for our annual technology symposium featuring keynote speakers from leading tech companies, interactive workshops, and networking opportunities. This year's focus will be on Artificial Intelligence and its impact on various industries.",
    image: "https://picsum.photos/800/400?random=1",
    category: "Technology",
    attendees: 250,
    maxCapacity: 300,
    schedule: [
      { time: "10:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "10:30 AM", activity: "Keynote Speech: Future of AI" },
      { time: "12:00 PM", activity: "Networking Lunch" },
      { time: "1:30 PM", activity: "Interactive Workshops" },
      { time: "3:30 PM", activity: "Panel Discussion" },
    ],
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        role: "AI Research Lead",
        company: "Tech Corp",
      },
      {
        name: "Prof. Michael Chen",
        role: "Department Head",
        company: "University",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Image */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-4 right-4 bg-primary-900 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-primary-900">
            {event.category}
          </span>
        </div>

        {/* Event Title and Quick Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary-900 transition-colors duration-300">
            {event.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Calendar className="w-5 h-5" />, text: event.date },
              { icon: <Clock className="w-5 h-5" />, text: event.time },
              { icon: <MapPin className="w-5 h-5" />, text: event.location },
              { icon: <User className="w-5 h-5" />, text: event.organizer },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center text-gray-600 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="mr-2 text-gray-400 group-hover:text-primary-900 transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="group-hover:text-gray-900 transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-primary-900 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2">
            <a className="w-full h-full" href="/event-register">
              Register Now
            </a>
          </button>
          <button className="flex items-center bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <Share2 className="w-4 h-4 mr-2" />
            Share Event
          </button>
          <button className="flex items-center bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <Download className="w-4 h-4 mr-2" />
            Save to Calendar
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description and Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                About the Event
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Schedule
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="text-gray-600 font-medium w-24 flex-shrink-0 group-hover:text-gray-900">
                      {item.time}
                    </div>
                    <div className="text-gray-600 group-hover:text-gray-900">
                      {item.activity}
                    </div>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-900" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Speakers and Attendance */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Speakers
              </h2>
              <div className="space-y-4">
                {event.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="border-b last:border-0 pb-4 last:pb-0 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="font-medium group-hover:text-primary-900 transition-colors duration-300">
                      {speaker.name}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {speaker.role} at {speaker.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Attendance
              </h2>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Users className="w-5 h-5 mr-2 text-gray-400" />
                <div>
                  <div className="font-medium">
                    {event.attendees} / {event.maxCapacity}
                  </div>
                  <div className="text-sm text-gray-600">Spots Remaining</div>
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary-900 h-2 rounded-full transition-all duration-500 ease-in-out hover:bg-primary-900"
                  style={{
                    width: `${(event.attendees / event.maxCapacity) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
