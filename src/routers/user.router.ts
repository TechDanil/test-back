import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.post('/create', createUser);
router.get('/get/:id?', getUsers);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id?', deleteUser);

export default router;
