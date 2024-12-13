import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  ChevronDown,
  UserX,
  Edit2,
  Key,
  Lock,
  Unlock,
} from "lucide-react";

export default function UsersManagement() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago",
      dateJoined: "2024-01-15",
      avatar: "JS",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Editor",
      status: "active",
      lastActive: "5 mins ago",
      dateJoined: "2024-02-20",
      avatar: "SJ",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.w@example.com",
      role: "Viewer",
      status: "inactive",
      lastActive: "2 days ago",
      dateJoined: "2024-03-01",
      avatar: "MW",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.d@example.com",
      role: "Editor",
      status: "suspended",
      lastActive: "1 week ago",
      dateJoined: "2024-01-10",
      avatar: "ED",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "all" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();
    const matchesStatus =
      selectedStatus === "all" || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "editor":
        return "bg-blue-100 text-blue-800";
      case "viewer":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        <p className="mt-2 text-gray-600">Manage user access and permissions</p>
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

          {/* Add User Button */}
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors duration-200">
            <Plus size={20} />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      selectedUsers.length === filteredUsers.length &&
                      filteredUsers.length > 0
                    }
                    className="rounded border-gray-300 text-primary-900 focus:ring-primary-900"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-300 text-primary-900 focus:ring-primary-900"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary-900 text-white flex items-center justify-center font-medium">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(
                        user.role
                      )} mb-1`}
                    >
                      {user.role}
                    </span>
                    <span
                      className={`px-2 py-1 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status.charAt(0).toUpperCase() +
                        user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {user.lastActive}
                    </div>
                    <div className="text-sm text-gray-500">
                      Joined {user.dateJoined}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-600 hover:text-primary-900 transition-colors duration-200">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-primary-900 transition-colors duration-200">
                        <Key size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-primary-900 transition-colors duration-200">
                        {user.status === "suspended" ? (
                          <Unlock size={18} />
                        ) : (
                          <Lock size={18} />
                        )}
                      </button>
                      <button className="text-gray-600 hover:text-red-600 transition-colors duration-200">
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
