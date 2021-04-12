import {Router} from 'express';
import {answerController} from './controllers/answer.controller';

const router = Router();

router.use('/', answerController);

export default router;
