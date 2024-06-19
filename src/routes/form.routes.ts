import {Router} from 'express'
import { ping, readForm, submitForm } from '../controllers/form.controller.ts';
const router = Router();

router.route('/ping').get(ping)
router.route('/read').get(readForm)
router.route('/submit').post(submitForm)

export default router;