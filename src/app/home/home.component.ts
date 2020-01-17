import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { User } from '../models/user.model';
import { Ingredient } from '../models/ingredient.model';



  const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
	selectedPizza: Pizza;
  pizzas: Pizza[] = PIZZAS;
  user: User = {
    name: 'Ravain',
    firstname: 'Nicolas',
    birthday: '1983-12-23',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg',
    age: null
  };

  ingredients : Ingredient[] = [
  	{ name: 'Tomate', image: 'tomate.jpg', weight: 50, price: 2 },
  	{ name: 'Olive', image: 'olive.jpg', weight: 5, price: 1 } 
  ];
  selectedIngredients: Ingredient[] = [];

  constructor() {
    this.calculateAge('1983-12-23');
  }

  private calculateAge(date: string): void {
    let currentDate = Date.now(); // 2020-01-16 en timestamp (millisecondes)
    let birthDate = (new Date(this.user.birthday)).getTime(); // 1991-11-18 en timestamp (millisecondes)
    let timeDiff = currentDate - birthDate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    this.user.age = age;
  }

  onSelect(pizza: Pizza): void {
    // On récupère la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }

  selectIngredient(event: Ingredient) {
  	console.log(event);
  	if(!this.selectedIngredients.includes(event)) {
  		this.selectedIngredients.push (event);
  	}
  }

  deleteIngredient(index: number, event) {
  	event.stopPropagation();
  	this.selectedIngredients.splice(index, 1);
  }
	}
