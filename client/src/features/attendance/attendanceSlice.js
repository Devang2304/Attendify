import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import attendanceService from "./attendanceService"

const initialState = {
    attendance: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create new subject attendance
export const createAttendance = createAsyncThunk('/add', async (UserAttendanceData, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await attendanceService.createAttendance(UserAttendanceData,token);
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})


export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        reset: ( state ) => initialState,
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createAttendance.pending, ( state ) =>{
            state.isLoading = true;
        })
        .addCase(createAttendance.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isSuccess = true;
            state.attendance.push(action.payload);

        })
        .addCase(createAttendance.rejected, (state,action) => {
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;

        })
    }
})

export const {reset} = attendanceSlice.actions
export default attendanceSlice.reducer