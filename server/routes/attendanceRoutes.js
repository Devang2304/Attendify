import express from 'express';
import {getUserAllAttendance,
        addUserAttendance,
        updateAttendance,
        getOneAttendance,
        deleteAttendance} from '../controller/attendanceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add',protect,addUserAttendance);
router.get('/attendance',protect,getUserAllAttendance);
router.get('/:id',protect,getOneAttendance);
router.post('/:id',protect,updateAttendance);
router.delete('/:id',protect,deleteAttendance);

export default router;
