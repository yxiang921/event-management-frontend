import axiosInstance from "./axiosInstance";

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get("/user/");
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to fetch users");
    }
};

export const getUserByID = async (userID) => {
    try {
        const response = await axiosInstance.get(`/user/${userID}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to fetch user");
    }
}

export const deleteUser = async (userID) => {
    try {
        const response = await axiosInstance.delete(`/user/${userID}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to delete user");
    }
}