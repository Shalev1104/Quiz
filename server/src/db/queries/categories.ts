import knex from '../db';
import Tables from '../schema/tables';
import Category, { GetAllCategories, GetCategoryByName } from '../schema/category';

export const allCategories: GetAllCategories = async () =>
    await knex<Category>(Tables.Categories).select('*');

export const categoryByName: GetCategoryByName = async name =>
    await knex<Category>(Tables.Categories).select('*').where('name', name).first();
