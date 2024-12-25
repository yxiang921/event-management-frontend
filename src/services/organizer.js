import axiosInstance from "./axiosInstance";

export const getOrganizers = async () => {
    try {
        const response = await axiosInstance.get("/organizer/");
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to fetch organizers");
    }
};

export const getOrganizerByID = async (organizerID) => {
    try {
        const response = await axiosInstance.get(`/organizer/${organizerID}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to fetch organizer");
    }
}

export const deleteOrganizer = async (organizerID) => {
    try {
        const response = await axiosInstance.delete(`/organizer/${organizerID}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Failed to delete organizer");
    }
}