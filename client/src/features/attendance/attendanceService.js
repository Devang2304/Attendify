import axios from "axios";

const API_URL = 'http://localhost:5000';


const createAttendance = async (UserAttendanceData, token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}/add`,UserAttendanceData,config);
    return response.data;
}
//get all attendances data
const getAttendances = async (token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}/attendance`,config);
    return response.data;
}
//get single attendances data
const getSingleAttendance = async (id,token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}/${id}`,config);
    return response.data;
}
//get single attendances data
const editAttendance = async (id,EditedattendData,token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}/${id}`,EditedattendData,config);
    return response.data;
}

// delete attendance
const deleteAttendance = async (id,token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}/${id}`,config);
    return response.data;
}

const attendanceService = {
    createAttendance,
    getAttendances,
    deleteAttendance,
    getSingleAttendance,
    editAttendance
}
export default attendanceService;

