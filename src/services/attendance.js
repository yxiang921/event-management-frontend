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

export const signAttendance = async (eventID, userID) => {
  try {
    const response = await axiosInstance.post(`/attendance/sign`, {
      eventID,
      userID,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to sign attendance"
    );
  }
};
