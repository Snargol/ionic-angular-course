import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Recipe 1',
      imageURL: 'https://gpfr-glps.innogamescdn.com/media/images/artwork-grepo-battle-wallpaper.32aad9f2.jpg',
      ingredients: ['Frites', 'Viande', 'Glace']
    },
    {
      id: '2',
      title: 'Recipe 2',
      imageURL: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ingredients: ['truc', 'much', 'bidule']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
