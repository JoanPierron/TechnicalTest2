import { Router } from 'express';
import {
  getAllPhones,
  createPhone,
  updatePhone,
  deletePhone,
  getPhoneById
} from '../controllers/phone.controller.js';

const router = Router();

router.get('/', getAllPhones);
router.post('/', createPhone);
router.get('/:id', getPhoneById);
router.put('/:id', updatePhone);
router.delete('/:id', deletePhone);

export default router;
