import { useEffect, useState } from "react";
import { Search, Filter, ChevronDown, UserX } from "lucide-react";
import { deleteUser, getOrganizers } from "../../services";
import toast from "react-hot-toast";

export default function UsersManagement() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const data = await getOrganizers();
      setUsers(data.users);
      console.log(data.users);
    }
    fetchApi();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "all" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();
    const matchesStatus =
      selectedStatus === "all" || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDeleteUser = async (userID) => {
    try {
      await deleteUser(userID);
      setUsers(users.filter((user) => user._id !== userID));
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Organizer Management
        </h1>
        <p className="mt-2 text-gray-600">
          Manage organizer access and permissions
        </p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900"
              />
            </div>

            {/* Role Filter */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter size={20} />
                <span>Filters</span>
                <ChevronDown size={16} />
              </button>
              {filterOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border p-2 z-10">
                  <div className="mb-2">
                    <p className="px-4 py-1 text-sm font-medium text-gray-500">
                      Role
                    </p>
                    {["all", "admin", "editor", "viewer"].map((role) => (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200
                          ${
                            selectedRole === role
                              ? "bg-primary-900 text-white hover:bg-primary-800"
                              : ""
                          }`}
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div>
                    <p className="px-4 py-1 text-sm font-medium text-gray-500">
                      Status
                    </p>
                    {["all", "active", "inactive", "suspended"].map(
                      (status) => (
                        <button
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                          className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200
                          ${
                            selectedStatus === status
                              ? "bg-primary-900 text-white hover:bg-primary-800"
                              : ""
                          }`}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Events Registered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary-900 text-white flex items-center justify-center font-medium">
                        <img
                          src={`https://avatar.iran.liara.run/public/boy?${user._id}`}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full mb-1`}
                    >
                      {user.email}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {user.events.length}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                      >
                        <UserX size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
