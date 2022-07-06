import { Request, Response } from "express";
import { categoryByName, allCategories } from "../db/queries/categories";

export const getCategories = async (req: Request, res: Response) => {
    const categories = await allCategories();
    if (!categories.length) return res.status(404).json("No categories found");

    return res.status(200).json(categories);
}

export const getCategoryByName = async (req: Request, res: Response) => {
    const { categoryName } = req.params;
    const category = await categoryByName(categoryName);

    if (!category)  return res.status(404).json(`Category ${categoryName} not found`);

    return res.status(200).json(category);
}