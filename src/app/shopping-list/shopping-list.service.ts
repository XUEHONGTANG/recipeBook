import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model"

export class ShoppingListService {
    IngredientChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatos', 10),
    ]

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.IngredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        console.log(ingredients);
        
        this.ingredients.push(...ingredients)
        this.IngredientChanged.emit(this.ingredients.slice())
    }

}