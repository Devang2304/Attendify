import attendanceData from '../model/userAttendance.js';
import User from '../model/user.js';

export const getUserAllAttendance = async (req,res) =>{
    try {
        const allAttendance = await attendanceData.find({user: req.user.id});
        res.status(200).json(allAttendance);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addUserAttendance = async (req,res) =>{
    const userAttendance = req.body;

    try {
        const addAttendance = await attendanceData.create({
            user: req.user.id,
            subjectName : userAttendance.subjectName,
            lectureAttended : userAttendance.lectureAttended,
            totalLectures : userAttendance.totalLectures,
            attendance: ((userAttendance.lectureAttended/userAttendance.totalLectures)*100).toFixed(2)
        })
    
        res.status(200).json(addAttendance);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateAttendance = async (req,res) =>{
    try {
        const attendance = await attendanceData.findById(req.params.id);

        if(!req.user){
            res.status(404).json('user not found');
        }
        // else if(attendance.user.toString() !== req.user.id){
        //     res.status(404).json('User not authorized');
        // }
        else{
            req.body.attendance= ((req.body.lectureAttended/req.body.totalLectures)*100).toFixed(2);
            const updatedAttendance = await attendanceData.findByIdAndUpdate(req.params.id,req.body, {
                new : true,
            })
            updatedAttendance.save();
            res.status(200).json("updated Attendance successfully");
        }


    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getOneAttendance = async (req,res) =>{
    try {
        const getAttendance = await attendanceData.findById(req.params.id);
        if(!req.user){
            res.status(404).json('Task not found');
        }
        // else if(getAttendance.user.toString() !== req.user.userName){
        //     res.status(404).json('fuck User not authorized');
        // }
        else{
            const getAttendance = await attendanceData.findById(req.params.id);
            res.status(200).json(getAttendance);
        }
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const deleteAttendance = async (req,res) =>{
    try {
        const deleteAttendance = await attendanceData.deleteOne({_id: req.params.id});
        res.status(200).json(deleteAttendance);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}