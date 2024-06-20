import {Router} from 'express'
import { ping, readForm, submitForm, editSubmission, deleteSubmission} from '../controllers/form.controller.ts';
const router = Router();

router.route('/ping').get(ping)
router.route('/read').get(readForm)
router.route('/submit').post(submitForm)

router.route('/delete/:ind').delete(deleteSubmission);
router.route('/edit/:ind').put(editSubmission);

export default router;