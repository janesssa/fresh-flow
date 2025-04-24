export interface Ingredient {
    name: string;
    quantity: string;
  }

  export interface Recipe {
    id: string;
    title: string;
    prepTime: number;
    cookTime: number;
    tags?: string[];
    ingredients: Ingredient[];
    steps: string[];
  }
  