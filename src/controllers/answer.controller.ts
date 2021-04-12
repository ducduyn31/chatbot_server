import express from 'express';
import dialog, {Bot} from '../utils/dialog';

export const answerController = express.Router();

answerController.get('/', async (req, res) => {
    try {
        const message = typeof req.query.message === 'string' ?
            req.query.message : Array.from(req.query.message as string[]).join(' ');
        const response = await dialog(message || ':)', Bot.TULING);

        res.json({
            content: response,
        });
    } catch (e) {
        res.json({
            content: e.message
        })
    }
})