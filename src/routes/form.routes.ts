import {Router} from 'express'
import { ApiResponse } from '../utils/apiResponse';
const router = Router();

router.route('/ping').get((req, res) => {
    const response = new ApiResponse(200, { message: 'pong' });
    res.json(response)
})

export default router;