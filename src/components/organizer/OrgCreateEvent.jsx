import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { createEvent } from "../../services/event";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

const OrgCreateEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { time: "", description: "" },
  ]);
  const [speakers, setSpeakers] = useState([]);

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, { time: "", description: "" }]);
  };

  const addSpeaker = () => {
    setSpeakers([...speakers, ""]);
  };

  const removeScheduleItem = (index) => {
    if (scheduleItems.length > 1) {
      setScheduleItems(scheduleItems.filter((_, i) => i !== index));
    }
  };

  const removeSpeaker = (index) => {
    if (speakers.length > 1) {
      setSpeakers(speakers.filter((_, i) => i !== index));
    }
  };

  const [event, setEvent] = useState({});

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    const schedule = scheduleItems.map(
      (item) => `${item.time} - ${item.description}`
    );

    setEvent({
      title,
      date,
      time,
      location,
      price,
      maxCapacity: capacity,
      type,
      category,
      description,
      schedule,
      speakers,
      status: "Pending",
      image: "https://picsum.photos/200/300",
    });

    console.log(event);
    await createEvent(event);

    if (event) {
      toast.success("Event created successfully");
      redirect("/organizer/events");
    } else {
      toast.error("Failed to create event, please try again");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-6">Create New Event</h3>
      <form className="space-y-6" onSubmit={handleCreateEvent}>
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={(e) => setTime(e.target.value)}
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
              onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setCapacity(e.target.value)}
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
              onChange={(e) => setType(e.target.value)}
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
              onChange={(e) => setCategory(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
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
            {scheduleItems?.map((item, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="time"
                  className="w-1/3 p-2 border border-gray-300 rounded-lg"
                  placeholder="Time"
                  onChange={(e) => {
                    const newScheduleItems = [...scheduleItems];
                    newScheduleItems[index].time = e.target.value;
                    setScheduleItems(newScheduleItems);
                  }}
                />
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Activity description"
                  onChange={(e) => {
                    const newScheduleItems = [...scheduleItems];
                    newScheduleItems[index].description = e.target.value;
                    setScheduleItems(newScheduleItems);
                  }}
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
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Speaker Name"
                    onChange={(e) => {
                      const newSpeakers = [...speakers];
                      newSpeakers[index] = e.target.value;
                      setSpeakers(newSpeakers);
                    }}
                  />
                  <div className="flex gap-2">
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
