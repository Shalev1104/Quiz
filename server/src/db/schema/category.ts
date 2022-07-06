import { DefaultColumns } from "./tables";

type Category = Image & DefaultColumns & {
    name: string;
}

type Image = { url: string; }

export type GetAllCategories = () => Promise<Category[]>;
export type GetCategoryByName = (name: string) => Promise<Category | undefined>;

export default Category;