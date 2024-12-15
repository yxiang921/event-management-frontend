import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const OrgCreateEvent = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { time: "", activity: "" }
  ]);
  const [speakers, setSpeakers] = useState([
    { name: "", role: "", company: "" }
  ]);

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, { time: "", activity: "" }]);
  };

  const removeScheduleItem = (index) => {
    if (scheduleItems.length > 1) {
      setScheduleItems(scheduleItems.filter((_, i) => i !== index));
    }
  };

  const addSpeaker = () => {
    setSpeakers([...speakers, { name: "", role: "", company: "" }]);
  };

  const removeSpeaker = (index) => {
    if (speakers.length > 1) {
      setSpeakers(speakers.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-6">Create New Event</h3>
      <form className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Title
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Music Concert"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="e.g., City Arena"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">RM</span>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                placeholder="50.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Capacity
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="e.g., 300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Type
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Conference"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Technology"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Describe your event..."
          ></textarea>
        </div>

        {/* Schedule */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Schedule
            </label>
            <button
              type="button"
              onClick={addScheduleItem}
              className="text-primary-900 hover:text-primary-800 flex items-center"
            >
              <Plus size={16} className="mr-1" /> Add Time Slot
            </button>
          </div>
          <div className="space-y-3">
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="time"
                  className="w-1/3 p-2 border border-gray-300 rounded-lg"
                  placeholder="Time"
                />
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Activity description"
                />
                <button
                  type="button"
                  onClick={() => removeScheduleItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Speakers
            </label>
            <button
              type="button"
              onClick={addSpeaker}
              className="text-primary-900 hover:text-primary-800 flex items-center"
            >
              <Plus size={16} className="mr-1" /> Add Speaker
            </button>
          </div>
          <div className="space-y-4">
            {speakers.map((speaker, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Speaker Name"
                  />
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Role"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                      placeholder="Company"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpeaker(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800"
          >
            Submit for Approval
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrgCreateEvent;