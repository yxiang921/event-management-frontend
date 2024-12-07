import { Camera, Mail, MapPin } from "lucide-react";

const CollegeEventsUserProfile = () => {
  const user = {
    name: "Jane Doe",
    email: "jane@university.edu",
    job: "Computer Science Student",
    location: "Anytown, USA",
    avatar: "https://picsum.photos/200/200",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg">
          {/* Header */}
          <div className="bg-gray-100 h-32 relative">
            <img
              width={100}
              height={100}
              src={user.avatar}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-600 text-lg">{user.job}</p>
            <div className="flex items-center mt-4">
              <Mail className="w-5 h-5 mr-2 text-gray-500" />
              <span className="text-gray-600">{user.email}</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              <span className="text-gray-600">{user.location}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center mt-4">
              <Camera className="w-5 h-5 mr-2" />
              Update Profile
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-gray-800">
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 ">Upcoming Events</h3>
              {/* Event cards go here */}
              <p>You have no upcoming events. Check back later for updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeEventsUserProfile;
