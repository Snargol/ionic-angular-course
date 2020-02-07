import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
