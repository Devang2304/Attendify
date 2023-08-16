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

const attendanceService = {
    createAttendance,
}
export default attendanceService;

