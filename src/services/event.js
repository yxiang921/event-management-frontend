import axiosInstance from "./axiosInstance";

export const getEvents = async () => {
  try {
    const response = await axiosInstance.get("event");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch events");
  }
};
