import attendanceData from '../model/userAttendance.js';
import User from '../model/user.js';

const getUserAllAttendance = async (req,res) =>{
    try {
        allAttendance = await attendanceData.find({user: req.user.id});
        res.status(200).json(allAttendance);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const addUserAttendance = async (req,res) =>{
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

const updateAttendance = async (req,res) =>{
    try {
        const attendance = await attendanceData.findById(req.params.id);

        if(!req.user){
            res.status(404).json('user not found');
        }
        else if(attendance.user.toString() !== req.user.id){
            res.status(404).json('User not authorized');
        }else{
            const updatedAttendance = await attendanceData.findByIdAndUpdate(req.params.id,req.body, {
                new : true,
            })
            updatedAttendance.save();
        }


    } catch (error) {
        res.status(404).json({message:error.message});
    }
}