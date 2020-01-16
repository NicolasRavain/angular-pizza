import { Component, Input } from '@angular/core';
import { Ingredient} from '../models/ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent {
  @Input() ingredients: Array<Ingredient> = [];

}
