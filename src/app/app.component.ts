import { Component } from '@angular/core';

interface Pizza {
	id: number;
	name: string;
	price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  pizza: Pizza = {
  id:1,
  name: 'Reine',
  price: 12
  }
}
