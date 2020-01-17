import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient} from '../models/ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent {
  @Input() ingredients: Array<Ingredient> = [];

  @Output() select: EventEmitter<Ingredient> = new EventEmitter();

  chooseIngredient(ingredient: Ingredient): void {
  	this.select.emit(ingredient);

  }

}
