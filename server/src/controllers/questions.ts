import { Request, Response } from "express";
import { categoryByName } from "../db/queries/categories";
import { questionsByCategory } from "../db/queries/questions";

export const getQuestionsByCategory = async (req: Request, res: Response) => {
    const { categoryName } = req.params;
    const category = await categoryByName(categoryName);
    
    if (!category) return res.status(404).json(`Category ${categoryName} not found`);

    const { id } = category;
    
    const questions = await questionsByCategory(id);

    if (!questions.length) return res.status(404).json(`Category ${category.name} has no questions`);

    const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);
    
    const shuffledQuestions = shuffle(questions);
    for (const question of shuffledQuestions)
        question.answers = shuffle(question.answers);

    return res.status(200).json(shuffledQuestions);
}