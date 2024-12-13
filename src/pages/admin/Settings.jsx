import { useState } from "react";
import { Save, Bell, Lock, Globe, User } from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    eventReminders: true,
    marketingEmails: false,
    newAttendees: true,
  });

  const [timeZone, setTimeZone] = useState("UTC-8");
  const [language, setLanguage] = useState("English");
  // const [theme, setTheme] = useState('light');

  const timezones = [
    "UTC-12",
    "UTC-11",
    "UTC-10",
    "UTC-9",
    "UTC-8",
    "UTC-7",
    "UTC-6",
    "UTC-5",
    "UTC-4",
    "UTC-3",
    "UTC-2",
    "UTC-1",
    "UTC+0",
    "UTC+1",
    "UTC+2",
    "UTC+3",
  ];

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
  ];

  const settingSections = [
    {
      title: "Profile Settings",
      icon: <User size={20} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-900 focus:ring-primary-900 sm:text-sm"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-900 focus:ring-primary-900 sm:text-sm"
              defaultValue="john.doe@example.com"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Notification Preferences",
      icon: <Bell size={20} />,
      content: (
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {key.split(/(?=[A-Z])/).join(" ")}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={value}
                  onChange={() =>
                    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
              </label>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Localization",
      icon: <Globe size={20} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time Zone
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-900 focus:ring-primary-900 sm:text-sm"
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-900 focus:ring-primary-900 sm:text-sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      ),
    },
    {
      title: "Security",
      icon: <Lock size={20} />,
      content: (
        <div className="space-y-4">
          <button className="text-sm font-medium text-primary-900 hover:text-primary-800 transition-colors duration-200">
            Change Password
          </button>
          <button className="block text-sm font-medium text-primary-900 hover:text-primary-800 transition-colors duration-200">
            Enable Two-Factor Authentication
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <button className="flex items-center space-x-2 bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors duration-200">
            <Save size={20} />
            <span>Save Changes</span>
          </button>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
              </div>
              <div className="p-6">{section.content}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
