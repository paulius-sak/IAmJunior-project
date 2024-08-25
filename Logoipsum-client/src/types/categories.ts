export interface Category {
  _id: string;
  name: string;
  color: string;
  url: string;
}

export type NewCategory = Omit<Category, "_id">;

export interface CategoryListProps {
  categories: Category[];
}

export interface CategoriesResponse {
    categories: Category[];
  }