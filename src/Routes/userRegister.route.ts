import { Router } from 'express';
import { createUser,updateUser,deleteUser, getUser, loginUser } from '../modules/userRegister/userRegister.controller';

const router = Router();
router.get('/',getUser)
router.post('/register', createUser); // User registration
router.post('/login', loginUser);

router.put('/:id', updateUser); // User update
router.delete('/:id', deleteUser); // User deletion

export default router;
