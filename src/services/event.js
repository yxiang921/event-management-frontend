import axiosInstance from "./axiosInstance";

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
