import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    subjectName : {
        type: String,
        required: [true, 'Please enter a subject']

    },
    lectureAttended : {
        type: Number,
        required: [true, 'Please enter no. of lecture attended']
    },
    totalLectures : {
        type: Number,
        required: [true, 'Please enter total number of lectures']
    },
    attendance : {
        type: Number,
        required: true
    }
})

const attendanceData = mongoose.model('attendanceData',userSchema);

export default attendanceData;