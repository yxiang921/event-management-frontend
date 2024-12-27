import axiosInstance from "./axiosInstance";

export const createEvent = async (eventData) => {
  console.log("This is event api", eventData);
  try {
    const response = await axiosInstance.post("event/create", {
      eventData,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create event");
  }
};

export const getEvents = async () => {
  try {
    const response = await axiosInstance.get("event");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch events");
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axiosInstance.get(`event/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch event");
  }
};

export const getRegisteredEvents = async (userID) => {
  try {
    const response = await axiosInstance.post(`event/getRegisteredEvents/`, {
      userID,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch registered events"
    );
  }
};

export const getEventAttendees = async (eventID) => {
  try {
    const response = await axiosInstance.get(
      `event/getEventAttendees/${eventID}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch event attendees"
    );
  }
};

export const registerEvent = async (userID, eventID) => {
  try {
    const response = await axiosInstance.post(`event/register/${eventID}`, {
      userId: userID,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to register event"
    );
  }
};

export const decideEvent = async (eventID, status) => {
  try {
    const response = await axiosInstance.post(`event/decide/${eventID}`, {
      status,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to approve event");
  }
};

export const deleteEvent = async (eventID) => {
  try {
    const response = await axiosInstance.delete(`event/${eventID}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete event");
  }
};
