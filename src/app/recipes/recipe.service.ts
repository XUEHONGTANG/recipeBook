import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'this is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'this is a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
      return this.recipes[id]
    }

    AddIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}
