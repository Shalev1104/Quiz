import express from 'express';
import { Endpoints } from './routes';
import { getQuestionsByCategory } from '../controllers/questions'; 

const router = express.Router({ mergeParams: true });

router.get(Endpoints.GET_QUESTIONS, getQuestionsByCategory);

module.exports = router;