import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    attendance: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        reset: ( state ) => initialState,
    },
})

export const {reset} = attendanceSlice.actions
export default attendanceSlice.reducer