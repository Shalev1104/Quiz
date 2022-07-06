import express from 'express';
import { Endpoints, Routes } from './routes';
import { getCategories, getCategoryByName } from '../controllers/categories'; 

const router = express.Router();

router.get(Endpoints.GET_CATEGORIES, getCategories);

router.get(Endpoints.GET_CATEGORY, getCategoryByName);

router.use(Routes.QUESTIONS_ROUTE, require('./questions'));

module.exports = router;