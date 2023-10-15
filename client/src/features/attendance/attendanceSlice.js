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


// getattnedances
export const getAttendances = createAsyncThunk('/attendance', async (_, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await attendanceService.getAttendances(token);
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})

// get single subject attendance
export const getSingleAttendance = createAsyncThunk('/getSingleAttendance', async (id, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await attendanceService.getSingleAttendance(id,token);
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})
// edit single subject attendance
export const editAttendance = createAsyncThunk('/editAttendance', async (id,EditedattendData,thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await attendanceService.editAttendance(id,EditedattendData,token);
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete subject attendance
export const deleteAttendance = createAsyncThunk('/delete', async (id, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await attendanceService.deleteAttendance(id,token);
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
        .addCase(getAttendances.pending, ( state ) =>{
            state.isLoading = true;
        })
        .addCase(getAttendances.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isSuccess = true;
            state.attendance = action.payload;

        })
        .addCase(getAttendances.rejected, (state,action) => {
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;

        })
        .addCase(deleteAttendance.pending, ( state ) =>{
            state.isLoading = true;
        })
        .addCase(deleteAttendance.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isSuccess = true;
            state.attendance = state.attendance.filter((attendance)=>attendance._id !== action.payload.id);

        })
        .addCase(deleteAttendance.rejected, (state,action) => {
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;

        })
        .addCase(getSingleAttendance.pending, ( state ) =>{
            state.isLoading = true;
        })
        .addCase(getSingleAttendance.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isSuccess = true;
            state.attendance = action.payload;

        })
        .addCase(getSingleAttendance.rejected, (state,action) => {
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;

        })
        .addCase(editAttendance.pending, ( state ) =>{
            state.isLoading = true;
        })
        .addCase(editAttendance.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isSuccess = true;
            state.attendance = action.payload;

        })
        .addCase(editAttendance.rejected, (state,action) => {
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;

        })
    }
})

export const {reset} = attendanceSlice.actions
export default attendanceSlice.reducer