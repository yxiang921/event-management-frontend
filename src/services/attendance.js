import axiosInstance from "./axiosInstance";

export const getAttendance = async (eventID) => {
  try {
    const response = await axiosInstance.get(`/attendance/${eventID}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};
